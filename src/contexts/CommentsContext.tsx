import { useToast } from "@chakra-ui/react";
import { ReactNode, createContext } from "react";
import api from "../services/api";

interface CommentsProvider {
  children: ReactNode;
}

interface CommentContextValues {
  registerComment(data: iComment): void;
}

interface iComment {
  id?: number;
  comment?: string;
  user_id?: number;
  car_id?: number;
}

export const CommentContext = createContext({} as CommentContextValues);

export const CommentProvider = ({ children }: CommentsProvider) => {
  const toast = useToast();

  const registerComment = async (data: iComment) => {
    const token = localStorage.getItem("motors-shop:token");
    const product = localStorage.getItem("id-product-page:");

    if (product) {
      const idProduct = JSON.parse(product);

      if(!token){
        toast({
          title: "É necessário realizar login para fazer comentários!",
          status: "info",
          isClosable: true,
        })
      }else{
        try {
          await api.post(`/comments/${idProduct.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          toast({
            title: "Comentário criado :)",
            status: "success",
            isClosable: true,
          });
        } catch (error) {
          toast({
            title: "Ops, algo deu errado :(",
            status: "error",
            isClosable: true,
          });
          console.log(error);
        }
      }
    }
  };

  return (
    <CommentContext.Provider value={{ registerComment }}>
      {children}
    </CommentContext.Provider>
  );
};
