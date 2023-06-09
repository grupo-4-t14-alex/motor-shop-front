import { Flex, Input } from "@chakra-ui/react"

const Homepage = ( ) => { 

    return ( 
        <Flex h={"100vh"} w={"100vw"} justify={"center"} align={"center"}>
            <Input  _focus={ {border: "1px solid transparent"}} borderRadius={"4px"}></Input>
            <Input size={"lg"} borderColor={"grey.7"} _hover={{borderColor:"grey.8"}} _focus={ {border: "1px solid transparent"}} focusBorderColor="brand.2" fontFamily="inter" borderRadius="4px" asdasd="asdasd"></Input>


            

        </Flex>
    )

}


export { Homepage }