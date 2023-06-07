import { Flex, Image } from "@chakra-ui/react";
import imgCar from "../../assets/img/imageCarMain.png";

export const CardMainImage = () => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      //   w={"80%"}
      h={"350px"}
      backgroundColor={"aqua"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"5px"}
    >
      <Image src={imgCar} />
    </Flex>
  );
};
