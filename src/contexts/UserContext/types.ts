import { iFormRegister } from "../../pages/Register/types"


export interface iUserProvider {
    children: React.ReactNode
}

export interface iUserTypes {
    registerUser(data: iFormRegister): void
}