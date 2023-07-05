import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { ResetPasswordData, resetPasswordSchema } from "../../pages/ResetPasword/schema"

interface ResetPasswordFormProps {
    token: string
}

export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {

    const { register, handleSubmit } = useForm<ResetPasswordData>({
        resolver: zodResolver(resetPasswordSchema)
    })

    const { resetPassword } = useAuth();

    const onFormSubmit = (formData: ResetPasswordData) => {

    resetPassword(token, formData, )

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
            marginBottom={"40px"}>Criar nova senha</Heading>

        <FormControl>
            <FormLabel 
                fontSize={"heading.7"}>Nova senha</FormLabel>
            <Input 
                {...register("password")} 
                isRequired 
                type="password" 
                id="password" 
                placeholder="Insera sua nova senha" 
                marginBottom={"20px"}/>
            {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
        </FormControl>

        <FormControl>
            <FormLabel 
            fontSize={"heading.7"}>Confirmar nova senha</FormLabel>
            <Input 
                {...register("passwordConfirm")} 
                isRequired 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirme sua nova senha" 
                marginBottom={"20px"}/>
            {/* <FormErrorMessage>{errors.password?.message}</FormErrorMessage> */}
        </FormControl>

        <Button 
            type="submit"
            marginBottom={"30px"} 
            variant={"brand1"}>Atualizar</Button>
            
        </Box>

    )
}

