import { Flex, Image } from "@chakra-ui/react";

interface iMainImage {
  mainImage: string
}

export const CardMainImage = ({mainImage}: iMainImage) => {
  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={"350px"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      borderRadius={"5px"}
      backgroundColor={"whiteFixed"}
    >
      <Image src={mainImage} />
    </Flex>
  );
};
