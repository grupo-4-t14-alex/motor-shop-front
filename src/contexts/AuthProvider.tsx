import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginData } from "../pages/Login/schema";
import api from "../services/api";
import { ResetPasswordData, SendEmailResetPasswordData } from "../pages/ResetPasword/schema";
import { useToast } from "@chakra-ui/react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
    signIn: (data: LoginData) => void;
    loading: boolean;
    sendEmail: (data: SendEmailResetPasswordData) => void
    resetPassword: (token: string, data: ResetPasswordData,) => void
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const toast = useToast()

  useEffect(() => {
    const token = localStorage.getItem("motors-shop:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);




  const signIn = async (data: LoginData) => {
    console.log("signin");
    try {
        const response = await api.post("/login", data);

        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

    const obj = {
        id: response.data.user.id,
        name: response.data.user.name,
        description: response.data.user.description,
    };

    const userJson = JSON.stringify(obj);

        localStorage.setItem("motors-shop:token", response.data.token);
        localStorage.setItem("motors-shop:user", userJson);

        navigate(""); //se admin -> profileViewAdmin, se não admin -> página normal com anúncios, mas nome renderizado
    } catch (error) {
        console.error(error);
        toast({
            title: "Email/Senha inválidos!",
            status: "error",
            isClosable: true,
          })
        
    }
    };

    const sendEmail = async (data: SendEmailResetPasswordData) => {
        try {
            api.post("/users/resetPassword", data)
            // toast de "email enviado"
            navigate("")
        } catch (error) {
            console.log(error)
        }
    }

    const resetPassword = async(token: string, data: ResetPasswordData) => {
        try {
            api.patch(`/users/resetPassword/${token}`, { password: data.password })
            console.log("cheguei aqui")
            // toast de "alteração com sucesso"
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading, sendEmail, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}