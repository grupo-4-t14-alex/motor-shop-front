import { createContext } from "react";
import { iUserProvider, iUserTypes } from "./types";
import { iFormRegister } from "../../pages/register/types";
import { useToast } from "@chakra-ui/react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({} as iUserTypes)

export const UserProvider = ({ children }: iUserProvider) => {

    const toast = useToast()

    const navigate = useNavigate()

    const registerUser = async (data: iFormRegister) => {
        try {

            console.log(data)

            await api.post("/users", data)

            navigate("/login")

            toast({
                title: "Usuário registrado :)",
                status: "success",
                isClosable: true,
              })

        } catch (error) {
            toast({
                title: "Ops, algo deu errado :(",
                status: "error",
                isClosable: true,
            })
            console.log(error);
            
        }
    }

    return(
        <UserContext.Provider value={{ registerUser }}>
            {children}
        </UserContext.Provider>
    )

}