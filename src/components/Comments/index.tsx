import { Box, Flex, Text } from "@chakra-ui/react";
import { CardUser } from "../CardUser";

interface iComment {
  comment: string,
  commentAuthor: string
}

export const Comments = ({comment, commentAuthor}: iComment) => {
  return (
    <Flex backgroundColor={"whiteFixed"} flexDirection={"column"} gap={"10px"} marginBottom={"25px"}>
      <Flex gap={"10px"} alignItems={"center"}>
        <CardUser name={commentAuthor} />
        <Box
          w={"5px"}
          h={"5px"}
          borderRadius={"100px"}
          backgroundColor={"grey.5"}
        />
        <Text fontSize={"body.2"} color={"grey.5"}>
          há 7 dias
        </Text>
      </Flex>
      <Text fontSize={"14px"} color={"grey.4"}>
        {comment}
      </Text>
    </Flex>
  );
};
