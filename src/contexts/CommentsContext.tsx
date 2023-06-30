import { useToast } from "@chakra-ui/react";
import { ReactNode, createContext } from "react";
import api from "../services/api";

interface CommentsProvider {
    children: ReactNode
}

interface CommentContextValues {
    registerComment(data: iComment): void
}

interface iComment {
    id?: number;
    comment?: string;
    user_id?: number;
    car_id?: number;
  }

export const CommentContext = createContext({} as CommentContextValues)

export const CommentProvider = ({ children }: CommentsProvider) => {

    const toast = useToast()

    const registerComment = async (data: iComment) => {

      const token = localStorage.getItem("motors-shop:token")

      let userObj = {
        id: ""
      };
      
      const dataUser = localStorage.getItem("motors-shop:user")
      
      
      if (dataUser !== null) {
        userObj = JSON.parse(dataUser);
      }

        try{

            await api.post(`/comments/${userObj.id}/:idCar`, data, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })

            console.log(data);

            toast({
                title: "Comentário criado :)",
                status: "success",
                isClosable: true,
              })

        }catch(error){
            toast({
                title: "Ops, algo deu errado :(",
                status: "error",
                isClosable: true,
              })
            console.log(error);
            
        }
        
    }

  return (
    <CommentContext.Provider value={{ registerComment }}>
        { children }
    </CommentContext.Provider>
  )
}
