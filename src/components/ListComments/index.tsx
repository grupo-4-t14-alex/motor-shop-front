import { useEffect, useState } from "react";
import api from "../../services/api";
import { Comments } from "../Comments";
import { Flex } from "@chakra-ui/react";

interface iComment {
  id: number;
  comment: string;
  createdAt: string;
  author: {
    authorId: number;
    authorName: string;
  };
  car: {
    carId: number;
    brand: string;
    model: string;
  };
}

export const ListComments = () => {

  const [comments, setComments] = useState<iComment[]>([]);

  useEffect(() => {
    const listComments = async () => {
      try {
        const response = await api.get("/comments");
        setComments(response.data);
      } catch (error) {
        console.error(error);
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
      {comments.map((comment, index) => (
        <Comments key={index} comment={comment.comment} commentAuthor={comment.author.authorName} />
      ))}
    </Flex>
  );
};