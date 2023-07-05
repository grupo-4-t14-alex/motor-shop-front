import { useDisclosure, useToast } from "@chakra-ui/react";
import { ReactNode, createContext } from "react";
import api from "../services/api";
import { iCreateComment } from "../components/CardComment/types";

interface CommentsProvider {
  children: ReactNode;
}

interface CommentContextValues {
  registerComment(data: iComment): void;
  deleteComment(commentId: number): void;
  updateComment(data: iCreateComment, idComment: number): void;
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

  const token = localStorage.getItem("motors-shop:token");

  const { isOpen, onOpen, onClose } = useDisclosure()

  const registerComment = async (data: iComment) => {
    const product = localStorage.getItem("id-product-page:");

    const token = localStorage.getItem("motors-shop:token");

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
            timeout: 10000,
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

  const deleteComment = async (commentId: number) => {
    try{
      await api.delete(`/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 10000,
      })
      toast({
        title: "Comentário excluido :)",
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

  const updateComment = async (data: iCreateComment, idComment: number) => {
    try {
      await api.patch(`/comments/${idComment}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 10000,
      })

      onClose()

      toast({
        title: "Comentário alterado :)",
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

  return (
    <CommentContext.Provider value={{ registerComment, deleteComment, updateComment }}>
      {children}
    </CommentContext.Provider>
  );
};
