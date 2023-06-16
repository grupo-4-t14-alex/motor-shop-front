import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/validator";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const navigate = useNavigate()

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)
            
            const { token } = response.data

            api.defaults.headers.common.authorization = `Bearer ${token}`

            localStorage.setItem('motors-shop:token', token)

            navigate("product") //se admin -> profileViewAdmin, se não admin -> página normal com anúncios, mas nome renderizado

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}