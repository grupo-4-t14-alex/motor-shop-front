import { Button, Flex, Image, Text } from "@chakra-ui/react";
import img from "../../assets/img/imgUser2.png";

export const CardUserProfile = () => {
  return (
    <Flex
      backgroundColor={"whiteFixed"}
      w={"100%"}
      p={"40px"}
      flexDirection={"column"}
      gap={"20px"}
      borderRadius={"5px"}
    >
      <Image src={img} w={"100px"} h={"100px"} />
      <Flex alignItems={"center"} gap={"20px"}>
        <Text fontSize={"heading.6"} fontWeight={"bold"}>
          Samuel Leão
        </Text>
        <Text
          backgroundColor={"brand.4"}
          color={"brand.2"}
          padding={"7px"}
          borderRadius={"5px"}
          fontSize={"buttonMediumText"}
          fontWeight={"bold"}
        >
          Anunciante
        </Text>
      </Flex>
      <Text fontSize={"body.1"} color={"grey.3"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
      <Button w={"150px"}>Criar anuncio</Button>
    </Flex>
  );
};
