import { ReactNode, createContext, useEffect, useState } from "react";
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
  productsFiltered: iProducts[];
  setProductsFiltered: React.Dispatch<React.SetStateAction<iProducts[]>>;
  productsSorted: iProducts[];
  setProductsSorted: React.Dispatch<React.SetStateAction<iProducts[]>>;
  productsProfilePublic: iProducts[];
  setProductsProfilePublic: React.Dispatch<React.SetStateAction<iProducts[]>>;
  profilePublic: iUser | undefined;
  setProfilePublic: React.Dispatch<React.SetStateAction<iUser | undefined>>;
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
  user: {
    id: number;
    name: string;
    description: string;
  };
  images: {
    id: number,
    name: string,
    image: string
  }[]
}

interface iCars {
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

interface iAddress {
  cep: string;
  city: string;
  complement: string;
  estate: string;
  number: string;
  street: string;
}

interface iUser {
  address: iAddress;
  birthDate: string;
  cars: iCars[];
  cpf: string;
  description: string;
  email: string;
  id: number;
  name: string;
  phone: string;
}

export const ProductContext = createContext<ProductsContextValues>(
  {} as ProductsContextValues
);

export const ProductProvider = ({ children }: ProductsProviderProps) => {
  const [productsProfile, setProductsProfile] = useState<iProducts[]>([]);
  const [products, setProducts] = useState<iProducts[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<iProducts[]>([]);
  const [productsSorted, setProductsSorted] = useState<iProducts[]>([]);
  const [productsProfilePublic, setProductsProfilePublic] = useState<
    iProducts[]
  >([]);
  const [profilePublic, setProfilePublic] = useState<iUser | undefined>();
  const [updatePage, setUpdatePage] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/cars");
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
        productsFiltered,
        setProductsFiltered,
        productsSorted,
        setProductsSorted,
        productsProfilePublic,
        setProductsProfilePublic,
        profilePublic,
        setProfilePublic,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
