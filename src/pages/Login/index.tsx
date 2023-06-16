import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link } from "@chakra-ui/react"
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    
    const { signIn } = useAuth()
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })


    return (
    <Box 
        bg={"grey.9"} 
        w={"100%"} 
        h={"100vh"} 
        display={"flex"}
        justifyContent={"center"} 
        alignItems={"center"}
        >
        <NavBarComponent/>
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            minW={"45%"}
            bg={"whiteFixed"}
            borderRadius={"4px"}
            padding={"5%"}
        >
            <form onSubmit={handleSubmit(signIn)}>
                <Box>
                    <Heading 
                        fontSize={"heading.3"} 
                        textAlign={"left"} 
                        marginBottom={"15px"}>Login</Heading>
                        
                    <FormControl>
                        <FormLabel fontSize={"inputLabel"} >Email</FormLabel>
                        <Input {...register("email")}
                             type="email" id="email" placeholder="Digitar email" marginBottom={"15px"} />
                        <FormErrorMessage fontSize={"lg"}>{errors.email?.message}</FormErrorMessage>
                    </FormControl>    

                    <FormControl >
                        <FormLabel>Password</FormLabel>
                        <Input {...register("password")} 
                             type="password" id="password" placeholder="Digitar senha" marginBottom={"15px"}  />
                        <FormErrorMessage fontSize={"lg"}>{errors.password?.message}</FormErrorMessage>
                    </FormControl>
                    
                    <Link marginBottom={"30px"}>Esqueci minha senha</Link>
                    <Button type="submit" onClick={() => console.log("cheguei")} marginBottom={"20px"}>Entrar</Button>
                </Box>
            </form>
            <Heading fontSize={"heading.5"} marginBottom={"20px"}>Ainda não possui conta?</Heading>

            <Button onClick={() => navigate("/register")}>Cadastrar</Button>
        </Box>
        <Footer/>
    </Box>
    )
}