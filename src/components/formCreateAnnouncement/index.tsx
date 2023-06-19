import ModalContainer from "../Modal"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { Button, Select, Textarea } from '@chakra-ui/react'
import { Input } from "@chakra-ui/input"
import { Flex, ModalBody, ModalFooter } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { IcreateAnnounce, createAnnounceSchema } from "./validators"
import { useEffect } from "react"
import axios from "axios"
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext"


export const FormCreateAnnouncement = () => {
    

    const {register, handleSubmit, formState:{errors} } = useForm<IcreateAnnounce>({
        resolver: zodResolver(createAnnounceSchema)
    })
    const {isOpen, onOpen, onClose, ops1 ,handlerModel, handlerBrand ,CreateAnnouncement, onError, resApiForm, setResApiForm, resApiForm2, setResApiForm2, marca, setMarca, model, setModel,arrayFuel  } = useContext(AnnouncementContext);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://kenzie-kars.herokuapp.com/cars",
          }).then((response) => {
            setResApiForm(response.data)
          });

    }, [])

    useEffect(()=>{
        axios({
            method: "get",
            url: `https://kenzie-kars.herokuapp.com/cars?brand=${marca}`,
          }).then((response) => {
            setResApiForm2(response.data)
          });
        
    }, [marca])

    return(
        <>
            <Button w={"150px"} onClick={onOpen}>Criar anuncio</Button>
            <ModalContainer variant="footerStartVariant" title="Criar anuncio" onClose={onClose} isOpen={isOpen} >
                <form onSubmit={ handleSubmit(CreateAnnouncement, onError)}>
                    <ModalBody>
                    <FormControl mb={"5"} isInvalid={errors.brand?true:false}>
                        <FormLabel>Marca</FormLabel>
                            <Select placeholder='Marca' value={marca}  {...register("brand")} onChange={(eve)=>handlerBrand(eve.currentTarget.value)}>
                                {ops1.map(ele => <option key={ele} value={ele}>{ele}</option> )}
                            </Select>
                                {errors.brand && (<FormErrorMessage>{errors.brand.message}</FormErrorMessage>)}
                    </FormControl>
                    <FormControl mb={"5"} isInvalid={errors.model?true:false} >
                        <FormLabel>Modelo</FormLabel>
                            <Select placeholder='Modelo'   {...register("model")} onChange={ eve => handlerModel( eve.currentTarget.value) }>
                                {resApiForm2[0] != undefined && resApiForm2.map(elem => <option  key={elem.name} value={elem.name}>{elem.name}</option> )} 
                            </Select>
                            {errors.model && <FormErrorMessage>{errors.model.message}</FormErrorMessage>}
                    </FormControl>


                    <Flex gap={"2"}>
                    <FormControl mb={"5"} >
                        <FormLabel >Ano</FormLabel>
                            <Input type='text' borderRadius={"4px"} {...register("year")}  value={model?.year} />
                    </FormControl> 

                    <FormControl mb={"5"} >
                        <FormLabel >Combustível</FormLabel>
                            <Input type='text' borderRadius={"4px"} {...register("fuel")} value={arrayFuel[model?.fuel! -1]}   />
                    </FormControl>

                    </Flex>

                    <Flex gap={"2"}>

                    <FormControl mb={"5"} isInvalid={errors.km?true:false} >
                        <FormLabel >Quilometragem</FormLabel>
                            <Input type='number' borderRadius={"4px"} {...register("km")} />
                            {errors.km && <FormErrorMessage>{errors.km.message}</FormErrorMessage>}
                    </FormControl> 

                    <FormControl mb={"5"} isInvalid={errors.color?true:false}>
                        <FormLabel >Cor</FormLabel>
                            <Input type='text' borderRadius={"4px"} {...register("color")}/>
                            {errors.color && <FormErrorMessage>{errors.color.message}</FormErrorMessage>}
                    </FormControl>

                    </Flex>

                    <Flex gap={"2"}>

                    <FormControl mb={"5"} >
                        <FormLabel >Preço tabela FIPE</FormLabel>
                            <Input type='number' borderRadius={"4px"} {...register("fipePrice")} value={model?.value} />
                    </FormControl> 

                    <FormControl mb={"5"} isInvalid={errors.sellPrice?true:false}>
                        <FormLabel >Preço</FormLabel>
                            <Input type='number' borderRadius={"4px"} {...register("sellPrice")} />
                            {errors.sellPrice && <FormErrorMessage>{errors.sellPrice.message}</FormErrorMessage>}
                    </FormControl>

                    </Flex>

                    <FormControl mb={"5"} isInvalid={errors.description?true:false} >
                        <FormLabel >Descrição</FormLabel>
                        <Textarea borderRadius={"4px"} {...register("description")}/>
                        {errors.description && <FormErrorMessage>{errors.description.message}</FormErrorMessage>}
                    </FormControl>

                    </ModalBody>

                    <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                        <Button type="reset" variant={"negative"} onClick={onClose} >Cancelar</Button>
                        <Button type="submit" variant={"brand1"} >Criar anúncio</Button>
                    </ModalFooter>
                </form>
            </ModalContainer>
        </>     
    )
} 