import { Flex } from "@chakra-ui/react"
import { FormCreateAnnouncement } from "../../components/formCreateAnnouncement"

const TestPage = ( ) =>{ 

    return( 
        <Flex bg={"cyan.400"} w={"100%"} h={"100vh"} justify={"center"} align={"center"}>

            <FormCreateAnnouncement/>

        </Flex>
    )
}

export { TestPage }