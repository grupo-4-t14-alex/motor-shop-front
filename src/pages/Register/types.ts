export interface iFormRegister {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    birthDate: string,
    description: string,
    admin: boolean,
    password: string,
    address: {
        cep: string,
        estate: string,
        city: string,
        street: string,
        number: string,
        complement: string
    }
}

// export interface iFormRegister {
//     name: string,
//     email: string,
//     cpf: string,
//     phone: string,
//     birthDate: string,
//     description: string,
//     admin: boolean,
//     password: string,
//     cep: string,
//     estate: string,
//     city: string,
//     street: string,
//     number: string,
//     complement: string
// }
