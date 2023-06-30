import { Flex, Heading } from "@chakra-ui/react";
import { ListComments } from "../ListComments";

export const CommentsArea = () => {
  
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      flexDirection={"column"}
      backgroundColor={"whiteFixed"}
      padding={"40px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Comentários
      </Heading>
      <ListComments />
    </Flex>
  );
};
