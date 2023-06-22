import { Flex } from "@chakra-ui/react"
import { FormUpdateUser } from "../../components/formUpdateUser"

const TestPage = ( ) =>{ 

    return( 
        <Flex bg={"cyan.400"} w={"100%"} h={"100vh"} justify={"center"} align={"center"}>

            <FormUpdateUser/>

        </Flex>
    )
}

export { TestPage }