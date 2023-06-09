import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img from "../../assets/img/imgUser2.png";

export const CardCarOwner = () => {
  return (
    <Flex
      w={{ base: "310px", md: "400px" }}
      h={{ base: "400px", md: "400px" }}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"20px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Image src={img} w={"100px"} h={"100px"} />
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Samuel Leão
      </Heading>
      <Text
        fontSize={"body.1"}
        fontWeight={"medium"}
        color={"grey.3"}
        textAlign={"center"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button>Ver todos anuncios</Button>
    </Flex>
  );
};