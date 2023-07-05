import { Flex, Heading, Text } from "@chakra-ui/react";

export const CardDescriptionCars = () => {
  const product = JSON.parse(localStorage.getItem("id-product-page:")!);

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
        {product.description}
      </Text>
    </Flex>
  );
};
