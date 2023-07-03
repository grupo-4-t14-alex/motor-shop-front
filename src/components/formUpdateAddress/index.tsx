import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, MenuItem, ModalBody, ModalFooter, useDisclosure, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import ModalContainer from "../Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdateUser, updateUserSchema } from "./utils"
import api from "../../services/api"

const FormUpdateAddress =  () => { 

    const currencyJSONDataUser = localStorage.getItem("motors-shop:user");
    const userData = currencyJSONDataUser && JSON.parse(currencyJSONDataUser)
    
 
    const {register, handleSubmit, formState:{errors} } = useForm<IUpdateUser>({
        resolver: zodResolver(updateUserSchema)
    })
    const token = localStorage.getItem("motors-shop:token")

    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const updateUser = async (data:IUpdateUser)=>{

        try {
            console.log(data)


            await api.patch("/users", data, {
                headers: { Authorization: `Bearer ${token}` },
              } )

              
             onClose()
              toast({
                title: "Annoucement created",
                description: "We've created your Annoucement for you.",
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


    return ( 
        <>
            <MenuItem onClick={onOpen} >Editar endereco</MenuItem>
            <ModalContainer variant="footerStartVariant" title="Editar perfil" onClose={onClose} isOpen={isOpen} >

                    <form onSubmit={ handleSubmit(updateUser, onError)}>
                    <Heading fontSize={"14px"}>Infomações de endereço</Heading>
                    <ModalBody>
                        <FormControl mb={"5"}  isInvalid={errors.address?.cep?true:false} >
                            <FormLabel >CEP</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("address.cep")} defaultValue={userData.address?.cep }/>
                                {errors.address?.cep && <FormErrorMessage>{errors.address?.cep?.message}</FormErrorMessage>}
                        </FormControl>

                        <Flex gap={"2"}>
                            <FormControl mb={"5"} isInvalid={errors.address?.estate ? true:false} >
                                <FormLabel >Estado</FormLabel>
                                    <Input type='text' borderRadius={"4px"} {...register("address.estate")} defaultValue={userData.address?.estate } />
                                    {errors.address?.estate && <FormErrorMessage>{errors.address?.estate?.message}</FormErrorMessage>}
                            </FormControl> 

                            <FormControl mb={"5"} isInvalid={errors.address?.city?true:false}>
                                <FormLabel >Cidade</FormLabel>
                                    <Input type='text' borderRadius={"4px"} {...register("address.city")} defaultValue={userData.address?.city }/>
                                    {errors.address?.city && <FormErrorMessage>{errors.address?.city?.message}</FormErrorMessage>}
                            </FormControl>
                        </Flex>


                        <FormControl mb={"5"}  isInvalid={errors.address?.cep?true:false} >
                            <FormLabel >Rua</FormLabel>
                                <Input type='text' borderRadius={"4px"} {...register("address.street")} defaultValue={userData.address?.street }/>
                                {errors.address?.cep && <FormErrorMessage>{errors.address?.cep?.message}</FormErrorMessage>}
                        </FormControl>

                        <Flex gap={"2"}>
                            <FormControl mb={"5"} isInvalid={errors.address?.number ? true:false} >
                                <FormLabel >Numero</FormLabel>
                                    <Input type='text' borderRadius={"4px"} {...register("address.number")} defaultValue={userData.address?.number }/>
                                    {errors.address?.number && <FormErrorMessage>{errors.address?.number?.message}</FormErrorMessage>}
                            </FormControl> 

                            <FormControl mb={"5"} isInvalid={errors.address?.complement?true:false}>
                                <FormLabel >Complemento</FormLabel>
                                    <Input type='text' borderRadius={"4px"} {...register("address.complement")} defaultValue={userData.address?.complement}/>
                                    {errors.address?.complement && <FormErrorMessage>{errors.address?.complement?.message}</FormErrorMessage>}
                            </FormControl>
                        </Flex>

                    </ModalBody>

                    <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                        <Button type="reset" variant={"negative"} onClick={onClose} >Cancelar</Button>
                        <Button type="submit" variant={"brand1"} >Salvar alterações</Button>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </>     

    )
}

export { FormUpdateAddress }