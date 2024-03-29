import { Box, Flex, Button, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { CardUser } from "../CardUser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCommentSchema, iCreateComment } from "./types";
import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentsContext";

export const CardComment = () => {

  const { registerComment } = useContext(CommentContext)

  let userObj = {
    name: ""
  };

  const nameUser = localStorage.getItem("motors-shop:user")

  if (nameUser !== null) {
    userObj = JSON.parse(nameUser);
  }

  const {register, handleSubmit, formState:{errors}, reset} = useForm<iCreateComment>({
    resolver: zodResolver(createCommentSchema)
  })

  const onSubmit = (data: iCreateComment) => {

    registerComment(data)
    reset()
    
  }

  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      flexDirection={"column"}
      backgroundColor={"whiteFixed"}
      padding={"40px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <CardUser name={userObj.name} />
      <Box position="relative" width="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            placeholder="Digite seu comentário aqui..."
            resize="none"
            h={"100px"}
            {...register("comment")}
          />
          {errors.comment && (<FormErrorMessage>{errors.comment.message}</FormErrorMessage>)}
          <Button variant="brand1" type="submit" size="sm" position="absolute" bottom="10px" right="10px">
            Comentar
          </Button>
        </form>
      </Box>
      <Flex flexDirection={{ base: "column", md: "row" }} gap={"10px"}>
        <Button variant="negative" borderRadius="full" bg="grey.8" color="grey.4" size="sm">Gostei muito!</Button>
        <Button variant="negative" borderRadius="full" bg="grey.8" color="grey.4" size="sm">Incrível</Button>
        <Button variant="negative" borderRadius="full" bg="grey.8" color="grey.4" size="sm">Recomendarei para meus amigos!</Button>
      </Flex>
    </Flex>
  );
};
