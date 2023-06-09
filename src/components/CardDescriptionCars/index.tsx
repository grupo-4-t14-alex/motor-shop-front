import { Flex, Heading, Text } from "@chakra-ui/react";

export const CardDescriptionCars = () => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={{ base: "350px", md: "200px" }}
      flexDirection={"column"}
      backgroundColor={"whiteFixed"}
      padding={"40px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Descrição
      </Heading>
      <Text fontSize={"body.1"} fontWeight={"medium"} color={"grey.3"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Flex>
  );
};
