import { useDisclosure, useToast } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { iCreateComment } from "../components/CardComment/types";

interface CommentsProvider {
  children: ReactNode;
}

interface CommentContextValues {
  registerComment(data: iComment): void;
  deleteComment(commentId: number): void;
  updateComment(data: iCreateComment, idComment: number): void;
  comments: iComment[] | undefined
}

interface iComment {
  id: number;
  comment: string;
  createdAt: string;
  user_id: {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    description: string;
    admin: boolean;
    password: string;
    reset_token: null;
  };
  car_id: {
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
    isActive: true;
  };
}

export const CommentContext = createContext({} as CommentContextValues);

export const CommentProvider = ({ children }: CommentsProvider) => {
  const toast = useToast();

  const token = localStorage.getItem("motors-shop:token");

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [comments, setComments] = useState<iComment[] | undefined>([]);

  const userIdString = localStorage.getItem("motors-shop:user")

  const product = localStorage.getItem("id-product-page:");

  const userId = userIdString ? JSON.parse(userIdString) : null

  const listComments = async () => {
    if (product) {
      const idProduct = JSON.parse(product);

      try {
        const response = await api.get(`/cars/${idProduct.id}/comments`);
        setComments(response.data);
        console.log(comments);
        
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {

    listComments();
  }, []);

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

          listComments()
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

      listComments()

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

      listComments()

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
    <CommentContext.Provider value={{ registerComment, deleteComment, updateComment, comments }}>
      {children}
    </CommentContext.Provider>
  );
};
