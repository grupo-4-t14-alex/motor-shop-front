import { z } from "zod";

export const createCommentSchema = z.object({
    comment: z.string().nonempty("this field cannot be empty")
})

export type iCreateComment = {
    comment: string
}