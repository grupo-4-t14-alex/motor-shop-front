import { Flex, Image } from "@chakra-ui/react";
import imgCar from "../../assets/img/imageCarMain.png";

export const CardMainImage = () => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={"350px"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"5px"}
      backgroundColor={"whiteFixed"}
    >
      <Image src={imgCar} />
    </Flex>
  );
};
