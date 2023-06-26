import { Flex } from "@chakra-ui/react"
import { FormUpdateAddress } from "../../components/formUpdateAddress"
import { FormUpdateUser } from "../../components/formUpdateUser"

const TestPage = ( ) =>{ 

    return( 
        <Flex bg={"cyan.400"} w={"100%"} h={"100vh"} justify={"center"} align={"center"}>

            <FormUpdateAddress/>
            <FormUpdateUser/>

        </Flex>
    )
}

export { TestPage }