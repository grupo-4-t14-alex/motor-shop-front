import { z } from "zod"
import { registerSchema } from "../../pages/register/schema"


export const updateUserSchema = registerSchema.partial()

export type IUpdateUser = z.infer<typeof updateUserSchema>
