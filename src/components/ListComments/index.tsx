import { useContext } from "react";
import { Comments } from "../Comments";
import { Flex, Text } from "@chakra-ui/react";
import { CommentContext } from "../../contexts/CommentsContext";

export const ListComments = () => {

  const { comments } = useContext(CommentContext)

  const userIdString = localStorage.getItem("motors-shop:user")

  const userId = userIdString ? JSON.parse(userIdString) : null

  return (
    <Flex
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex"}
      justifyContent={"center"}
    >

      {
        comments ? (
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
