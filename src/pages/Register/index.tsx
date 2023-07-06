import { Button, Center, Flex, Input, Text, Textarea } from "@chakra-ui/react"
import { NavBarComponent } from "../../components/NavBar"
import { Link } from "react-router-dom"
import { iFormRegister } from "./types"
import {

    FormLabel,
  } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { Footer } from "../../components/Footer"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./schema"
import InputMask from "react-input-mask";

export const RegisterPage = () => {

    const { registerUser } = useContext(UserContext)

    const [isAdmin, setIsAdmin] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>({
        resolver: zodResolver(registerSchema)
    })

    const isAdminTrue = () => {
        setIsAdmin(true)
        
    }

    const isAdminFalse = () => {
        setIsAdmin(false)
    }

    const onSubmit = (data: iFormRegister) => {

        data.admin = isAdmin

        const cpfMasked = data.cpf

        const userBody = {
            name: data.name,
            email: data.email,
            cpf: cpfMasked.replace(/[.-]/g, ""),
            phone: data.phone,
            birthDate: data.birthDate,
            description: data.description,
            admin: data.admin,
            password: data.password,
            address: {
                cep: data.address.cep,
                estate: data.address.estate,
                city: data.address.city,
                street: data.address.street,
                number: data.address.number,
                complement: data.address.complement
            }
        }
        registerUser(userBody)
        
    }

  return (
    <>
        <NavBarComponent />
        <Flex
            bg={"grey.9"}
            minH="100vh"

            height="100%"
            paddingTop={"20px"}
            paddingBottom={"20px"}
            marginTop={"80px"}
            zIndex={"2"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Center bg={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"30px"} borderRadius={"10px"} marginBottom={"100px"}>
                <div style={{width: '22.125rem'}}>
                    <Text fontSize={"24px"} fontWeight="medium" marginBottom={"20px"}>Cadastro</Text>
                    <Text fontSize={"14px"} marginBottom={"20px"}>Informações pessoais</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <FormLabel>Nome</FormLabel>
                        <Input marginBottom={"10px"} type="text"  placeholder="Nome completo" {...register("name", { required: true })}/>
                        {errors.name && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.name?.message}</Text>}
                        <FormLabel>Email</FormLabel>
                        <Input marginBottom={"10px"} type="text" placeholder="Ex: user@motosshop.com.br" {...register("email", { required: true })}/>
                        {errors.email && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.email?.message}</Text>}
                        <FormLabel>CPF</FormLabel>
                        <Input as={InputMask} mask="999.999.999-99" marginBottom={"10px"} type="text" placeholder="000.000.000-00" {...register("cpf", { required: true })}/>
                        {/* <MaskedInput
                            style={{marginBottom: "10px", width: "100%", height: "3rem", color: "#1A202C", border: "1px solid", borderRadius: "0.375rem", borderColor: "inherit", padding: "0 1rem 0 1rem", fontSize: "1.125rem"}}
                            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                            {...register("cpf")}
                        /> */}
                        {errors.cpf && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.cpf?.message}</Text>}
                        <FormLabel>Celular</FormLabel>
                        <Input marginBottom={"10px"} type="text" placeholder="(DDD) 90000-0000" {...register("phone", { required: true })}/>
                        {errors.phone && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.phone?.message}</Text>}
                        <FormLabel>Data de nascimento</FormLabel>
                        <Input marginBottom={"10px"} type="text" placeholder="00/00/0000" {...register("birthDate", { required: true })}/>
                        {errors.birthDate && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.birthDate?.message}</Text>}
                        <FormLabel>Descrição</FormLabel>
                        <Textarea placeholder="Digitar descrição" {...register("description", { required: true })}/>
                        {errors.description && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.description?.message}</Text>}

                        <FormLabel marginTop={"25px"} marginBottom={"15px"}>Informações de endereço</FormLabel>

                        <FormLabel>CEP</FormLabel>
                        <Input marginBottom={"10px"} type="text" placeholder="00000-000" {...register("address.cep", { required: true })}/>
                        {errors.address && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.address.cep?.message}</Text>}
                        <Flex marginBottom={"15px"}>
                            <Flex display={"flex"} flexDirection={"column"} marginRight={"10px"}>
                                <FormLabel>Estado</FormLabel>
                                <Input marginBottom={"10px"} type="text" placeholder="Digitar estado" {...register("address.estate", { required: true })}/>
                                {errors.address && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.address.estate?.message}</Text>}
                            </Flex>
                            <Flex display={"flex"} flexDirection={"column"}>
                                <FormLabel>Cidade</FormLabel>
                                <Input marginBottom={"10px"} type="text" placeholder="Cidade" {...register("address.city", { required: true })}/>
                                {errors.address && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.address.city?.message}</Text>}
                            </Flex>
                        </Flex>
                        <FormLabel>Rua</FormLabel>
                        <Input marginBottom={"15px"} type="text" placeholder="Nome da rua" {...register("address.street", { required: true })}/>
                        {errors.address && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.address.street?.message}</Text>}
                        <Flex marginBottom={"15px"}>
                            <Flex display={"flex"} flexDirection={"column"} marginRight={"10px"}>                                
                                <FormLabel>Número</FormLabel>
                                <Input marginBottom={"10px"} type="text" placeholder="Digitar número" {...register("address.number", { required: true })}/>
                                {errors.address && <Text>{errors.address.number?.message}</Text>}
                            </Flex>
                            <Flex display={"flex"} flexDirection={"column"}>
                                <FormLabel>Complemento</FormLabel>
                                <Input marginBottom={"10px"} type="text" placeholder="Ex: apart 307" {...register("address.complement", { required: true })}/>
                                {errors.address && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.address.complement?.message}</Text>}
                            </Flex>
                        </Flex>
                        <FormLabel>Tipo de conta</FormLabel>
                        <Flex marginBottom={"10px"} gap="10px" display={"flex"} justifyContent={""} w={"100%"}>
                            <Button variant="brand1" onClick={() => isAdminFalse()} w={"50%"} bg="#4529E6" color="white" _focus={{ bg: "white", color: "#4529E6" }} >Comprador</Button>
                            <Button variant="brand1" onClick={() => isAdminTrue()} w={"50%"} bg="#4529E6" color="white" _focus={{ bg: "white", color: "#4529E6" }} >Anunciante</Button>
                        </Flex>
                        <FormLabel>Senha</FormLabel>
                        <Input marginBottom={"15px"} type="password" placeholder="Digitar senha" {...register("password", { required: true })}/>
                        {errors.password && <Text color={"red"} marginTop={"-10px"} marginBottom={"10px"}>{errors.password?.message}</Text>}
                        <Button variant="brand1" w="100%" type="submit" >Cadastrar</Button>
                    </form>
                    <Text marginTop={"15px"} textAlign={"center"}>Já possui conta? <Link to="/">Logar</Link></Text>
                </div>
            </Center>
        </Flex>
        <Footer />
    </>
  )
}
