import { Box } from "@chakra-ui/react"
import { NavBarComponent } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { SendEmailForm } from "../../components/formSendResetEmail"

export const SendEmailResetPassword = () => {

    return (
    <Box 
        display={"flex"}
        justifyContent={"center"} 
        alignItems={"center"}
        bg={"grey.9"} 
        w={"100%"} 
        h={"100vh"} 
        >
        <NavBarComponent/>
        <SendEmailForm/>
        <Footer/>
    </Box>
    )
}


