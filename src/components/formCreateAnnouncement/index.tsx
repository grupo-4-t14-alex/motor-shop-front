import { useDisclosure } from "@chakra-ui/hooks"
import ModalContainer from "../Modal"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Button, Select, Textarea } from '@chakra-ui/react'
import { Input } from "@chakra-ui/input"
import { Flex, ModalBody, ModalFooter } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { IcreateAnnounce, createAnnounceSchema } from "./validators"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../services/api"
import { useToast } from '@chakra-ui/react'
import { boolean } from "zod"


export const FormCreateAnnouncement = () => {
    

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {register, handleSubmit } = useForm<IcreateAnnounce>({
        resolver: zodResolver(createAnnounceSchema)
    })

    const [ updatePage, setUpdatePage ] = useState(true)

    const toast = useToast()
    
    const CreateAnnouncement = async ( data: IcreateAnnounce) => { 
        data.year = Number(model?.year!)
        data.fipePrice = model?.value!
        data.fuel = model?.fuel!
        data.sellPrice = Number(data.sellPrice)
        data.km = Number(data.km)
        console.log(data)

        try {
            const token = localStorage.getItem("motors-shop:token")
            await api.post( "/cars", data,{headers:{Authorization: `Bearer ${token}`,}})

            toast({
                title: 'Annoucement created',
                description: "We've created your Annoucement for you.",
                status: 'success',
                position: "top-right",
                duration: 2000,
                isClosable: true,
              })

              setUpdatePage(!updatePage)
            
            
            
        } catch (error) {
            toast({
                title: 'Try again later',
                description: "Try again later",
                status: 'error',
                position: "top-right",
                duration: 2000,
                isClosable: true,
              })
            
              setUpdatePage(!updatePage)
        }
    }

    const onError = (errors:any, e:any) => console.log(errors, e);

    interface Car {
        name: string;
      }
      
    type CarData = {
        [brand: string]: Car[];
      };

    interface Car2 {
        id: string;
        name: string;
        brand: string;
        year: number;
        fuel: number;
        value: number;
      }

    const [resApiForm, setResApiForm] = useState({} as CarData )
    const [resApiForm2, setResApiForm2] = useState([] as Car2[])
    const [marca, setMarca] = useState("" as string)
    const [model, setModel] = useState({} as Car2 | undefined)
    const arrayFuel = ["flex", "hibrido", "eletrico"]



    useEffect(() => {
        axios({
            method: "get",
            url: "https://kenzie-kars.herokuapp.com/cars",
          }).then((response) => {
            setResApiForm(response.data)
          });

    }, [])


    const handlerBrand = async (value: string)  => {
        setMarca(value)

    }
    const handlerModel= async (value: string)  => {
        setModel(resApiForm2.find((elem)=> elem.name == value))
        // setInputValue(resApiForm2.find((elem)=> elem.name == value)?.fuel)
    }
    
    useEffect(()=>{
        axios({
            method: "get",
            url: `https://kenzie-kars.herokuapp.com/cars?brand=${marca}`,
          }).then((response) => {
            setResApiForm2(response.data)
          });
        
    }, [marca])


    const ops1 = Object.keys(resApiForm)

    return(
        <>
            <button onClick={onOpen}>teste</button>
            <ModalContainer variant="footerStartVariant" title="Criar anuncio" onClose={onClose} isOpen={isOpen} >
            <form onSubmit={ handleSubmit(CreateAnnouncement, onError)}>
            <ModalBody>
            <FormControl mb={"5"}>
                <FormLabel>Marca</FormLabel>
                    <Select placeholder='Marca' value={marca}  {...register("brand")} onChange={(eve)=>handlerBrand(eve.currentTarget.value)}>
                        {ops1.map(ele => <option key={ele} value={ele}>{ele}</option> )}
                    </Select>
            </FormControl>
            <FormControl mb={"5"}>
                <FormLabel>Modelo</FormLabel>
                    <Select placeholder='Modelo'   {...register("model")} onChange={ eve => handlerModel( eve.currentTarget.value) }>
                        {resApiForm2[0] != undefined && resApiForm2.map(elem => <option  key={elem.name} value={elem.name}>{elem.name}</option> )} 
                    </Select>
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

            <FormControl mb={"5"} >
                <FormLabel >Quilometragem</FormLabel>
                    <Input type='number' borderRadius={"4px"} {...register("km")} />
            </FormControl> 

            <FormControl mb={"5"} >
                <FormLabel >Cor</FormLabel>
                    <Input type='text' borderRadius={"4px"} {...register("color")}/>
            </FormControl>

            </Flex>

            <Flex gap={"2"}>

            <FormControl mb={"5"} >
                <FormLabel >Preço tabela FIPE</FormLabel>
                    <Input type='number' borderRadius={"4px"} {...register("fipePrice")} value={model?.value} />
            </FormControl> 

            <FormControl mb={"5"} >
                <FormLabel >Preço</FormLabel>
                    <Input type='number' borderRadius={"4px"} {...register("sellPrice")} />
            </FormControl>

            </Flex>

            <FormControl mb={"5"} >
                <FormLabel >Descrição</FormLabel>
                <Textarea borderRadius={"4px"} {...register("description")}/>
            </FormControl>


            </ModalBody>

            <ModalFooter display={"flex"} justifyContent={"flex-end"}>

                <Button type="reset" variant={"negative"} onClick={onClose} >Cancelar</Button>
                <Button type="submit" variant={"brand1"} onClick={onClose} >Criar anúncio</Button>



            </ModalFooter>
            </form>

            </ModalContainer>
        
        
        </>     
    )
} 