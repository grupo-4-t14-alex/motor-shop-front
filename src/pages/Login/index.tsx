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
        display={"flex"}
        justifyContent={"center"} 
        alignItems={"center"}
        bg={"grey.9"} 
        w={"100%"} 
        h={"100vh"} 
        >
        <NavBarComponent/>

        <Box
            as="form" onSubmit={handleSubmit(signIn)}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"stretch"}
            h={"50%"}
            maxW={"500px"}
            w={"60%"}
            bg={"whiteFixed"}
            borderRadius={"10px"}
            padding={"7%"}
        >
            <Heading 
                fontSize={"heading.4"} 
                marginBottom={"40px"}>Login</Heading>

            <FormControl>
                <FormLabel 
                    fontSize={"heading.7"}>Email</FormLabel>
                <Input 
                    {...register("email")}
                    isRequired type="email" 
                    id="email" 
                    placeholder="Digitar email" 
                    marginBottom={"30px"} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel 
                fontSize={"heading.7"}>Password</FormLabel>
                <Input 
                    {...register("password")} 
                    isRequired 
                    type="password" 
                    id="password" 
                    placeholder="Digitar senha" 
                    marginBottom={"5px"}/>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Link 
                marginBottom={"40px"} 
                textAlign={"right"}
                fontSize={"heading.7"} >Esqueci minha senha</Link>

            <Button 
                type="submit" 
                marginBottom={"40px"} 
                variant={"brand1"}>Entrar</Button>

            <Heading 
                fontSize={"heading.7"} 
                textAlign={"center"}
                marginBottom={"30px"}>Ainda não possui conta?</Heading>

            <Button 
                onClick={() => navigate("/register")} 
                marginBottom={"30px"} 
                variant={"outline2"}>Cadastrar</Button>
                
        </Box>
        <Footer/>
    </Box>
    )
}


