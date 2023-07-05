import { z } from "zod"

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const createAnnounceSchema = z.object({
	brand: z.string().nonempty("this field cannot be empty"),
	model: z.string().nonempty("this field cannot be empty"),
	year: z.string(),
	fuel: z.string(),
	km: z.string(),
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

export interface Car {
	name: string;
}

export type CarData = {
	[brand: string]: Car[];
};

export interface Car2 {
	id: string;
	name: string;
	brand: string;
	year: number;
	fuel: number;
	value: number;
}

export { createAnnounceSchema }