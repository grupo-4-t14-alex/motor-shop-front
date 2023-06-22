import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginData } from "../pages/Login/validator";
import api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
        name: response.data.user.name,
        description: response.data.user.description,
      };

      const userJson = JSON.stringify(obj);

      localStorage.setItem("motors-shop:token", response.data.token);
      localStorage.setItem("motors-shop:user", userJson);

      navigate(""); //se admin -> profileViewAdmin, se não admin -> página normal com anúncios, mas nome renderizado
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
