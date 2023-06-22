import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, ModalBody, ModalFooter,  Textarea, useDisclosure } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import ModalContainer from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"

const FormUpdateUser = () => { 

    const updateUser =(data:any)=>{
        console.log(data)
    }

    const {register, handleSubmit, formState:{errors} } = useForm ({
        resolver: zodResolver(updateUser)
    })
    
    const onError = (errors: any, e: any) =>{ 
        console.log(errors, e);
    } 

    const { isOpen, onOpen, onClose } = useDisclosure()

    return ( 
        <>
            <Button w={"150px"} onClick={onOpen}>Editar perfil</Button>
            <ModalContainer variant="footerStartVariant" title="Editar perfil" onClose={onClose} isOpen={isOpen} >
                <form onSubmit={ handleSubmit(updateUser, onError)}>
                    <Heading fontSize={"14px"}>Infomações pessoais</Heading>
                    <ModalBody>
                        <FormControl mb={"5"} >
                            <FormLabel >Nome</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("name")} />
                        </FormControl>

                        <FormControl mb={"5"} >
                            <FormLabel >Email</FormLabel>
                                <Input type='email' borderRadius={"4px"} {...register("email")} />
                        </FormControl>

                        <FormControl mb={"5"} >
                            <FormLabel >CPF</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("cpf")}  />
                        </FormControl>

                        <FormControl mb={"5"} >
                            <FormLabel >Celular</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("phone")}  />
                        </FormControl>

                        <FormControl mb={"5"} >
                            <FormLabel >Data de nascimento</FormLabel>
                                <Input type='date' borderRadius={"4px"} {...register("birthDate")} />
                        </FormControl>

                        <FormControl mb={"5"} >
                            <FormLabel >Descrição</FormLabel>
                            <Textarea borderRadius={"4px"} {...register("description")}/>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                        <Button type="reset" variant={"negative"} onClick={onClose} >Cancelar</Button>
                        <Button type="reset" variant={"alert"} onClick={onClose} >Excluir Perfil</Button>
                        <Button type="submit" variant={"brand1"} >Criar anúncio</Button>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </>     

    )
}

export { FormUpdateUser }