import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export const CardTitleCars = () => {
  const product = JSON.parse(localStorage.getItem("id-product-page:")!);

  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={{ base: "350px", md: "250px" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
      backgroundColor={"whiteFixed"}
      gap={"40px"}
      borderRadius={"5px"}
      padding={"40px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        {product.model}
      </Heading>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        h={"100%"}
      >
        <Flex
          justifyContent={"space-between"}
          gap={"20px"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex gap={"10px"}>
            <Text
              backgroundColor={"brand.4"}
              color={"brand.2"}
              padding={"7px"}
              borderRadius={"5px"}
              fontSize={"buttonMediumText"}
              fontWeight={"medium"}
            >
              {product.year}
            </Text>
            <Text
              backgroundColor={"brand.4"}
              color={"brand.2"}
              padding={"7px"}
              borderRadius={"5px"}
              fontSize={"buttonMediumText"}
              fontWeight={"medium"}
            >
              {product.km} KM
            </Text>
          </Flex>
          <Text>R$ {product.sellPrice}</Text>
        </Flex>
        <Button w={"100px"}>Comprar</Button>
      </Flex>
    </Flex>
  );
};
