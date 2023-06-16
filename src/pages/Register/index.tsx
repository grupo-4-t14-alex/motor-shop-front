import { Button, Center, Container, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import { NavBarComponent } from "../../components/NavBar"
import { Link } from "react-router-dom"
import { iFormRegister } from "./types"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { Footer } from "../../components/Footer"

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>()

    const onSubmit = () => {
        console.log("Hi")
    }

  return (
    <>
        <NavBarComponent />
        <Flex
            bg={"grey.9"}
            minH="100vh"

            height="100%"
            marginTop={"80px"}
            zIndex={"2"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Center bg={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"30px"} borderRadius={"10px"} marginBottom={"100px"}>
                <div style={{width: '22.125rem'}}>
                    <Text fontSize={"24px"} marginBottom={"20px"}>Cadastro</Text>
                    <Text fontSize={"14px"} marginBottom={"20px"}>Informações pessoais</Text>
                    <form >
                        <FormLabel>Nome</FormLabel>
                        <Input marginBottom={"25px"} type="text"  placeholder="Nome completo" {...register("name")}/>
                        {/* {errors.name && <p>{errors.name?.message}</p>} */}
                        <FormLabel>Email</FormLabel>
                        <Input marginBottom={"25px"} type="text" placeholder="Ex: user@motosshop.com.br" {...register("email")}/>
                        {/* {errors.email && <p>{errors.email?.message}</p>} */}
                        <FormLabel>CPF</FormLabel>
                        <Input marginBottom={"25px"} type="text" placeholder="000.000.000-00" {...register("cpf")}/>
                        {/* {errors.password && <p>{errors.password?.message}</p>} */}
                        <FormLabel>Celular</FormLabel>
                        <Input marginBottom={"25px"} type="text" placeholder="(DDD) 90000-0000" {...register("phone")}/>
                        {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                        <FormLabel>Data de nascimento</FormLabel>
                        <Input marginBottom={"25px"} type="text" placeholder="00/00/0000" {...register("birthDate")}/>
                        {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                        <FormLabel>Descrição</FormLabel>
                        <Textarea placeholder="Digitar descrição" {...register("description")}/>
                        {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}

                        <FormLabel marginTop={"25px"} marginBottom={"15px"}>Informações de endereço</FormLabel>

                        <FormLabel>CEP</FormLabel>
                        <Input marginBottom={"25px"} type="text" placeholder="00000-000"/>
                        {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                        <Flex marginBottom={"15px"}>
                            <Flex display={"flex"} flexDirection={"column"} marginRight={"10px"}>
                                <FormLabel>Estado</FormLabel>
                                <Input type="text" placeholder="Digitar estado"/>
                                {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                            </Flex>
                            <Flex display={"flex"} flexDirection={"column"}>
                                <FormLabel>CEP</FormLabel>
                                <Input type="text" placeholder="Cidade"/>
                                {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                            </Flex>
                        </Flex>
                        <FormLabel>Rua</FormLabel>
                        <Input marginBottom={"15px"} type="text" placeholder="Nome da rua"/>
                        {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                        <Flex marginBottom={"15px"}>
                            <Flex display={"flex"} flexDirection={"column"} marginRight={"10px"}>                                
                                <FormLabel>Número</FormLabel>
                                <Input type="text" placeholder="Digitar número"/>
                                {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                            </Flex>
                            <Flex display={"flex"} flexDirection={"column"}>
                                <FormLabel>Complemento</FormLabel>
                                <Input type="text" placeholder="Ex: apart 307"/>
                                {/* {errors.contactNumber && <p>{errors.contactNumber?.message}</p>} */}
                            </Flex>
                        </Flex>
                        <Button _hover={{ bg: "#00296F", color: "white" }} type="submit">Cadastrar</Button>
                    </form>
                    <Text marginTop={"15px"} textAlign={"center"}>Já possui conta? <Link to="/">Logar</Link></Text>
                </div>
            </Center>
        </Flex>
        <Footer />
    </>
  )
}
