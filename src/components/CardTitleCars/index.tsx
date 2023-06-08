import { Flex, Heading, Text, Button } from "@chakra-ui/react";

export const CardTitleCars = () => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={{ base: "350px", md: "250px" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={"40px"}
      borderRadius={"5px"}
      padding={"40px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
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
              2013
            </Text>
            <Text
              backgroundColor={"brand.4"}
              color={"brand.2"}
              padding={"7px"}
              borderRadius={"5px"}
              fontSize={"buttonMediumText"}
              fontWeight={"medium"}
            >
              0 KM
            </Text>
          </Flex>
          <Text>R$ 00.000,00</Text>
        </Flex>
        <Button w={"100px"}>Comprar</Button>
      </Flex>
    </Flex>
  );
};
