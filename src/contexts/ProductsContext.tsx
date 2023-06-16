import { ReactNode, createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextValues {
  productsProfile: iProducts[];
  setProductsProfile: React.Dispatch<React.SetStateAction<iProducts[]>>;
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

  return (
    <ProductContext.Provider value={{ productsProfile, setProductsProfile }}>
      {children}
    </ProductContext.Provider>
  );
};
