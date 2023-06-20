import { ReactNode, createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import api from "../services/api";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextValues {
  productsProfile: iProducts[];
  setProductsProfile: React.Dispatch<React.SetStateAction<iProducts[]>>;
  updatePage: boolean;
  setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
}

interface iProducts {
  id: number;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  km: number;
  color: string;
  fipePrice: number;
  sellPrice: number;
  description: string;
  isActive: boolean;
}

export const ProductContext = createContext<ProductsContextValues>(
  {} as ProductsContextValues
);

export const ProductProvider = ({ children }: ProductsProviderProps) => {
  const [productsProfile, setProductsProfile] = useState<iProducts[]>([]);
  const [products, setProducts] = useState<iProducts[]>([]);
  const toast = useToast();
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("motors-shop:token");
    (async () => {
      try {
        const response = await api.get("/cars/:1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsProfile,
        setProductsProfile,
        updatePage,
        setUpdatePage,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
