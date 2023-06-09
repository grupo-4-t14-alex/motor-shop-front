import { Box, Flex, Text } from "@chakra-ui/react";
import { CardUser } from "../CardUser";

export const Comments = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"}>
      <Flex gap={"10px"} alignItems={"center"}>
        <CardUser />
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
      <Text fontSize={"body.1"} color={"grey.4"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Flex>
  );
};
