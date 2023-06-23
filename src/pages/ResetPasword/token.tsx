import { Box } from "@chakra-ui/react"
import { NavBarComponent } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { ResetPasswordForm } from "../../components/formResetPassword"
import { useParams } from "react-router-dom"

export const ResetPassword = () => {
    const { token } = useParams()

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
        <ResetPasswordForm token={token as string}/>
        <Footer/>
    </Box>
    )
}
