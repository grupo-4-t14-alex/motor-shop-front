import { Flex, Heading, Image } from "@chakra-ui/react";
import imgUser from "../../assets/img/imgUser.png";

export const CardUser = () => {
  return (
    <Flex alignItems={"center"} gap={"10px"}>
      <Image src={imgUser} />
      <Heading fontSize={"body.2"} fontWeight={"bold"} color={"grey.4"}>
        Samuel Leao
      </Heading>
    </Flex>
  );
};
