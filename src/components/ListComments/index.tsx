import { useEffect, useState } from "react";
import api from "../../services/api";
import { Comments } from "../Comments";
import { Flex, Text } from "@chakra-ui/react";

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

export const ListComments = () => {
  const [comments, setComments] = useState<iComment[]>([]);

  const userIdString = localStorage.getItem("motors-shop:user")

  const product = localStorage.getItem("id-product-page:");

  const userId = userIdString ? JSON.parse(userIdString) : null

  useEffect(() => {
    const listComments = async () => {
      if (product) {
        const idProduct = JSON.parse(product);

        try {
          const response = await api.get(`/cars/${idProduct.id}/comments`);
          setComments(response.data);
          // listComments();
          
        } catch (error) {
          console.error(error);
        }
      }
    };
    listComments();
  }, []);

  return (
    <Flex
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex"}
      justifyContent={"center"}
    >

      {
        comments.length >= 1 ? (
          comments.map((comment, index) => (
            userId ? (
              comment.user_id.id == userId.id ? (
                <Comments key={index} comment={comment} commentAuthor={comment.user_id.name} display={'flex'} idComment={comment.id} />
                ) : (
                  <Comments key={index} comment={comment} commentAuthor={comment.user_id.name} display={'none'} idComment={comment.id} />
              )
            ) : (
              <Comments key={index} comment={comment} commentAuthor={comment.user_id.name} display={'none'} idComment={comment.id} />
            )
          ))
        ) : (
          <Text>No momento não possui comentários!</Text>
        )
        }
    </Flex>
  );
};
