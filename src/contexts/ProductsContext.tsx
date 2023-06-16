import { ReactNode, createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";


interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextValues {
  productsProfile: iProducts[];
  setProductsProfile: React.Dispatch<React.SetStateAction<iProducts[]>>;
  updatePage: boolean
  setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
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
}

export const ProductContext = createContext<ProductsContextValues>(
  {} as ProductsContextValues
);

export const ProductProvider = ({ children }: ProductsProviderProps) => {
  const [productsProfile, setProductsProfile] = useState<iProducts[]>([]);
  const toast = useToast();
  const [ updatePage, setUpdatePage ] = useState(true)

  return (
    <ProductContext.Provider value={{ productsProfile, setProductsProfile, updatePage, setUpdatePage  }}>
      {children}
    </ProductContext.Provider>
  );
};
