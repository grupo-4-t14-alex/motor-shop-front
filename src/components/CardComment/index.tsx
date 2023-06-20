import { Box, Flex, Button, Textarea, ButtonGroup } from "@chakra-ui/react";
import { CardUser } from "../CardUser";

export const CardComment = () => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      flexDirection={"column"}
      backgroundColor={"whiteFixed"}
      padding={"40px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <CardUser />
      <Box position="relative" width="100%">
        <Textarea
          placeholder="Digite seu comentário aqui..."
          resize="none"
          h={"100px"}
        />
        <Button size="sm" position="absolute" bottom="10px" right="10px">
          Comentar
        </Button>
      </Box>
      <Flex flexDirection={{ base: "column", md: "row" }} gap={"10px"}>
        <Button size="sm">Gostei muito!</Button>
        <Button size="sm">Incrível</Button>
        <Button size="sm">Recomendarei para meus amigos!</Button>
      </Flex>
    </Flex>
  );
};
