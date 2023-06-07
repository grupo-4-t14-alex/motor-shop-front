import { Box, Flex, Input, border } from "@chakra-ui/react"

export const Homepage = ( ) => { 

    return(
        <Flex bg={"#f6f6f6"} height={"100vh"} justify={"center"} align={"center"}>

            <Input size={"lg"} borderColor={"grey.7"} _hover={{borderColor:"grey.8"}} _focus={{ border: "1px solid transparent"}} focusBorderColor="brand.2" fontFamily={"inter"} borderRadius={"4px"}  /> 
            <Input _focus={{ border: "1px solid transparent"}} fontFamily={"inter"} borderRadius={"4px"}  />


        </Flex>
    )
}

