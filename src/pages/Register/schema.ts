import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: z.string().email('Insira um endereço de e-mail válido'),
    cpf: z.string().min(11, 'Insira um CPF válido').max(11, 'Insira um CPF válido'),
    phone: z.string().min(11, 'Insira um telefone válido').max(11, 'Insira um telefone válido'),
    birthDate: z.string(),
    description: z.string().min(3, 'Digite algo sebre você'),
    address: z.object({
        cep: z.string().min(8, 'Digite um CEP válido').max(9, 'Digite um CEP válido'),
        estate: z.string().min(2, 'Digite um Estado').max(50, "Estado deve ter no máximo 50 caracteres"),
        city: z.string().min(2, 'Digite uma Cidade').max(50, "Cidade deve ter no máximo 50 caracteres"),
        street: z.string().min(2, 'Digite um Rua').max(50, "Rua deve ter no máximo 50 caracteres"),
        number: z.string().min(1, 'Digite um Número').max(7, "Estado deve ter no máximo 50 caracteres"),
        complement: z.string(),
    }),
    password: z.string().min(8, ' Senha precisa ser pelo menos de 8 caracteres'),
})