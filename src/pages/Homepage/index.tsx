import { Flex, FormControl, FormHelperText, FormLabel, Input, useDisclosure } from "@chakra-ui/react"
import ModalContainer from "../../components/Modal"


const Homepage = ( ) => { 


    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Flex w={"100%"} h={"100vh"} bg={"green"} align={"center"} justify={"center"} flexDir={"column"}>

            <button onClick={()=> onOpen()} > adasdasd</button>

            <ModalContainer title="teste" onClose={onClose} isOpen={isOpen}>
                <form action="">

            <   FormControl mb={"4"}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                </FormControl>
            <   FormControl mb={"4"}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                </FormControl>
            <   FormControl mb={"4"}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                </FormControl>

                </form>
            </ModalContainer>

            
            
        </Flex>
    )

}


export { Homepage }