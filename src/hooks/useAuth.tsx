import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}