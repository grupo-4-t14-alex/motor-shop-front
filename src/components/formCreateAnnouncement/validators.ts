import { z } from "zod"

const createAnnounceSchema = z.object({
    brand: z.string().nonempty("this field cannot be empty"),
	model: z.string().nonempty("this field cannot be empty"),
	year: z.string(),
	fuel:z.string(),
	km: z.number(),
	color: z.string().nonempty("this field cannot be empty"),
	fipePrice: z.string(),
	sellPrice: z.string().nonempty("this field cannot be empty"),
	description: z.string().nonempty("this field cannot be empty"),

})



export type IcreateAnnounce = {
	brand: string,
	model: string,
	year: number,
	fuel: number,
	km: number,
	color: string,
	fipePrice: number,
	sellPrice: number,
	description: string,

}


export { createAnnounceSchema }