import { z } from "zod"

export const sendEmailResetPasswordSchema = z.object({
    email: z.string().email("Deve ser um e-mail"),
})

export const resetPasswordSchema = z.object({
    password: z.string().min(8, "Senha precisa ser pelo menos de 8 caracteres"),
    passwordConfirm: z.string().min(8, "A confirmação de senha é obrigatória")
    })
    .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
        message: "As senhas precisam ser iguais!",
        path: ["confirm"]
    });

export type LoginData = z.infer<typeof sendEmailResetPasswordSchema>
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>
export type SendEmailResetPasswordData = z.infer<typeof sendEmailResetPasswordSchema>