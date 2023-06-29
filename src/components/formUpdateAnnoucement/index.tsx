import ModalContainer from "../Modal"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { Button, Heading, Select, Text, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import { Input } from "@chakra-ui/input"
import { Flex, ModalBody, ModalFooter } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Car2, CarData, IcreateAnnounce, createAnnounceSchema, iProducts } from "./validators"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import api from "../../services/api"
import { ProductContext } from "../../contexts/ProductsContext"
import InputMask from "react-input-mask";




export const FormUpdateAnnouncement = ( { product }: iProducts) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modal2 = useDisclosure()


    const {register, handleSubmit, formState:{errors} } = useForm<IcreateAnnounce>({
        resolver: zodResolver(createAnnounceSchema)
    })

    const { updatePage, setUpdatePage } = useContext(ProductContext);

    const [resApiForm, setResApiForm] = useState({} as CarData);
    const [resApiForm2, setResApiForm2] = useState([] as Car2[]);
    const [marca, setMarca] = useState(product.brand as string);
    const [model, setModel] = useState({name:product.model, year:product.year, fuel:product.fuel, value: product.fipePrice, } as Car2 | undefined);

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

    const toast = useToast();

    const updateAnnouncement = async (data: IcreateAnnounce) => {
      data.year = Number(model?.year!);
      data.fipePrice = model?.value!;
      data.fuel = model?.fuel!;
      data.sellPrice = Number(data.sellPrice);
      data.km = Number(data.km);

      console.log(data)
      console.log(product.id)
  
      try {
        const token = localStorage.getItem("motors-shop:token");
        await api.patch(`/cars/${product.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });

        onClose()
        toast({
          title: "Annoucement updated",
          description: "We've updated your Annoucement for you.",
          status: "success",
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });
  
      } catch (error) {
        toast({
          title: "Try again later",
          description: "Try again later",
          status: "error",
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });
      } finally {
        setUpdatePage(!updatePage);
      }
    };
  
    const arrayFuel = ["flex", "hibrido", "eletrico"];
  
    const onError = (errors: any, e: any) =>{ 
      console.log(errors, e);
      const fields = Object.keys(errors).toString()
      
  
      toast({
        title: "fill in all required fields",
        description: `fields[${fields}]`,
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    }
  
  
    const deleteCar = async () => { 
        try {
            const token = localStorage.getItem("motors-shop:token");
            await api.delete(`/cars/${product.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            toast({
                title: "Annoucement deleted",
                description: "We've deleted your Annoucement for you.",
                status: "success",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });
        } catch (error) {
            toast({
                title: "Try again later",
                description: "Try again later",
                status: "error",
                position: "top-right",
                duration: 2000,
                isClosable: true,
              });
            
        } finally {
            setUpdatePage(!updatePage);
          }

    }

    const handlerBrand = async (value: string) => {
      setMarca(value);
    };
  
    const handlerModel = async (value: string) => {
      setModel(resApiForm2.find((elem) => elem.name == value));
    };
  
    const ops1 = Object.keys(resApiForm)



    return(
        <>
            <Button w={"150px"} onClick={onOpen}>Editar</Button>
            <ModalContainer variant="footerStartVariant" title="editar anuncio" onClose={onClose} isOpen={isOpen} >
                <form onSubmit={ handleSubmit(updateAnnouncement, onError)}>
                    <ModalBody>
                    <FormControl mb={"5"} isInvalid={errors.brand?true:false}>
                        <FormLabel>Marca</FormLabel>
                            <Select placeholder='Marca' value={marca} {...register("brand")} onChange={(eve)=>handlerBrand(eve.currentTarget.value)}>
                                {ops1.map(ele => <option key={ele} value={ele}>{ele}</option> )}
                            </Select>
                                {errors.brand && (<FormErrorMessage>{errors.brand.message}</FormErrorMessage>)}
                    </FormControl>
                    <FormControl mb={"5"} isInvalid={errors.model?true:false} >
                        <FormLabel>Modelo</FormLabel>
                            <Select placeholder='Modelo' value={model?.name}   {...register("model")} onChange={ eve => handlerModel( eve.currentTarget.value) }>
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
                            <Input type='number' borderRadius={"4px"} {...register("km")} defaultValue={product.km} />
                            {errors.km && <FormErrorMessage>{errors.km.message}</FormErrorMessage>}
                    </FormControl> 

                    <FormControl mb={"5"} isInvalid={errors.color?true:false}>
                        <FormLabel >Cor</FormLabel>
                            <Input type='text' borderRadius={"4px"} {...register("color")} defaultValue={product.color}/>
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
                            <Input type='number' borderRadius={"4px"} {...register("sellPrice")} defaultValue={product.sellPrice} />
                            {errors.sellPrice && <FormErrorMessage>{errors.sellPrice.message}</FormErrorMessage>}
                    </FormControl>

                    </Flex>

                    <FormControl mb={"5"} isInvalid={errors.description?true:false} >
                        <FormLabel >Descrição</FormLabel>
                        <Textarea borderRadius={"4px"} {...register("description")} defaultValue={product.description}/>
                        {errors.description && <FormErrorMessage>{errors.description.message}</FormErrorMessage>}
                    </FormControl>

                    </ModalBody>

                    <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                        <Button type="reset" variant={"negative"} onClick={onClose} >Cancelar</Button>
                        <Button type="reset" variant={"alert"} onClick={modal2.onOpen}>excluir</Button>
                        <Button type="submit" variant={"brand1"} >Atulizar anúncio</Button>
                    </ModalFooter>
                </form>
            </ModalContainer>

            <ModalContainer variant="footerStartVariant" title="Excluir usuario" onClose={modal2.onClose} isOpen={modal2.isOpen} >
            <ModalBody>
                <Heading fontSize={"16px"} mb={"4"}>Tem certeza que deseja remover seu anuncio?</Heading>
                <Text fontSize={"16px"}>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anuncio e removerá seus dados de nossos servidores.</Text>
    
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"flex-end"}>
                <Button type="reset" variant={"negative"} onClick={modal2.onClose} >Cancelar</Button>
                <Button type="submit" variant={"alert"} onClick={deleteCar}>deletar anuncio</Button>
            </ModalFooter>
        
    </ModalContainer>
        </>     
    )
} 