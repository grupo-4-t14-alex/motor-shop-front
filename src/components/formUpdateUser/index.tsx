import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, MenuItem, ModalBody, ModalFooter,  Text,  Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import ModalContainer from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdateUser, updateUserSchema } from "./utils"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

const FormUpdateUser =  () => { 

    const currencyJSONDataUser = localStorage.getItem("motors-shop:user");
    const userData = currencyJSONDataUser && JSON.parse(currencyJSONDataUser)
    

    const {register, handleSubmit, formState:{errors} } = useForm<IUpdateUser>({
        resolver: zodResolver(updateUserSchema)
    })
    const token = localStorage.getItem("motors-shop:token")

    const toast = useToast();

    const modal1 = useDisclosure()
    const modal2 = useDisclosure()
    const updateUser = async (data:IUpdateUser)=>{

        try {
            await api.patch("/users", data, {
                headers: { Authorization: `Bearer ${token}` },
              } )

             

              modal1.onClose()
              toast({
                title: "updated",
                description: "We've updated your Annoucement for you.",
                status: "success",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });

        } catch (error) {
            console.log(error)
            toast({
                title: "Try again later",
                description: "Try again later",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });
        }
    }
    
    const onError = (errors: any, e: any) =>{ 
        console.log(errors, e);
    } 

    const navigate = useNavigate();
    const deleteUser = async () =>{
        try {
            await api.delete(`/users/${userData.id}`, {
                headers: { Authorization: `Bearer ${token}` },
              } )

              toast({
                title: "deleted",
                description: "We've deleted your Annoucement for you.",
                status: "success",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });

              localStorage.removeItem("motors-shop:user")
              localStorage.removeItem("motors-shop:token")


              navigate("/")
            
        } catch (error) {
            console.log(error)
            toast({
                title: "Try again later",
                description: "Try again later",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });
        }
    }


    return ( 
        <>
            <MenuItem onClick={modal1.onOpen}>Editar Perfil</MenuItem>
            <ModalContainer variant="footerStartVariant" title="Editar perfil" onClose={modal1.onClose} isOpen={modal1.isOpen} >

                    <form onSubmit={ handleSubmit(updateUser, onError)}>
                    <Heading fontSize={"14px"}>Infomações pessoais</Heading>
                    <ModalBody>
                        <FormControl mb={"5"}  isInvalid={errors.name?true:false} >
                            <FormLabel >Nome</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("name")} defaultValue={userData.name }/>
                                {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={"5"} isInvalid={errors.email?true:false}>
                            <FormLabel >Email</FormLabel>
                                <Input type='email' borderRadius={"4px"} {...register("email")} defaultValue={userData.email} />
                                {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={"5"} isInvalid={errors.cpf?true:false}>
                            <FormLabel >CPF</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("cpf")} defaultValue={userData.cpf}  />
                                {errors.cpf && <FormErrorMessage>{errors.cpf.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={"5"} isInvalid={errors.phone?true:false}>
                            <FormLabel >Celular</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("phone")} defaultValue={userData.phone}  />
                                {errors.phone && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={"5"} isInvalid={errors.birthDate?true:false}>
                            <FormLabel >Data de nascimento</FormLabel>
                                <Input type='date' borderRadius={"4px"} {...register("birthDate")} defaultValue={userData.birthDate} />
                                {errors.birthDate && <FormErrorMessage>{errors.birthDate.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mb={"5"} isInvalid={errors.description?true:false}>
                            <FormLabel >Descrição</FormLabel>
                            <Textarea borderRadius={"4px"} {...register("description")} defaultValue={userData.description}/>
                            {errors.description && <FormErrorMessage>{errors.description.message}</FormErrorMessage>}
                        </FormControl>

                    </ModalBody>

                    <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                        <Button type="reset" variant={"negative"} onClick={modal1.onClose} >Cancelar</Button>
                        <Button type="reset" variant={"alert"} onClick={modal2.onOpen}>Excluir Perfil</Button>
                        <Button type="submit" variant={"brand1"} >Salvar alterações</Button>
                    </ModalFooter>
                </form>
            </ModalContainer >

            {/* <ModalDeleteUser isOpen={modal2.isOpen} />    ================================================*/}

            <ModalContainer variant="footerStartVariant" title="Excluir usuario" onClose={modal2.onClose} isOpen={modal2.isOpen} >
            <ModalBody>
                <Heading fontSize={"16px"} mb={"4"}>Tem certeza que deseja remover sua conta?</Heading>
                <Text fontSize={"16px"}>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</Text>
    
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                <Button type="reset" variant={"negative"} onClick={modal2.onClose} >Cancelar</Button>
                <Button type="submit" variant={"alert"} onClick={deleteUser}>deletar usuario</Button>
            </ModalFooter>
        
    </ModalContainer>

        </>     

    )
}

export { FormUpdateUser }