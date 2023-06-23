import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendEmailResetPasswordData, sendEmailResetPasswordSchema } from "../../pages/ResetPasword/schema"
import { useAuth } from "../../hooks/useAuth";

export const SendEmailForm = () => {

    const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
        resolver: zodResolver(sendEmailResetPasswordSchema)
      })
    
      const { sendEmail } = useAuth()

      const onFormSubmit = (formData: SendEmailResetPasswordData) => {
        console.log(formData)
        sendEmail(formData)
      }

    return(

        <Box
        as="form" onSubmit={handleSubmit(onFormSubmit)}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        alignItems={"stretch"} 
        h={"40%"}
        maxW={"500px"}
        w={"60%"}
        bg={"whiteFixed"}
        borderRadius={"10px"}
        padding={"48px 44px"}
        >
        <Heading 
            fontSize={"heading.4"} 
            marginBottom={"40px"}>Recuperação de senha</Heading>

        <FormControl>
            <FormLabel 
                fontSize={"heading.7"}>Informe o e-mail cadastrado</FormLabel>
            <Input 
                {...register("email")} 
                isRequired 
                type="email" 
                id="email" 
                placeholder="Insera seu e-mail" 
                marginBottom={"20px"}/>
            {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
        </FormControl>

        <Button 
            type="submit"
            marginBottom={"30px"} 
            variant={"brand1"}>Enviar email</Button>           
        </Box>

    )
}



