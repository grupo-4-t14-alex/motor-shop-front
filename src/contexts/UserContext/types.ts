import { iFormRegister } from "../../pages/register/types"


export interface iUserProvider {
    children: React.ReactNode
}

export interface iUserTypes {
    registerUser(data: iFormRegister): void
}