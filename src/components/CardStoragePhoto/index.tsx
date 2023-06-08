import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import img from "../../assets/img/storagePhoto.png";

export const CardStoragePhoto = () => {
  const images: string[] = [img, img, img, img, img, img];

  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunkedArray: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <Flex
      w={{ base: "310px", md: "400px" }}
      h={{ base: "310px", md: "350px" }}
      flexDirection={"column"}
      padding={"20px"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        Fotos
      </Heading>
      <Flex>
        <Box>
          {chunkArray(images, 3).map((imageGroup, index) => (
            <Flex key={index} mb={4}>
              {imageGroup.map((imageSrc, imageIndex) => (
                <Box key={imageIndex} flex="1" p={2}>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={"grey.7"}
                    w={{ base: "70px", md: "100px" }}
                    h={{ base: "70px", md: "100px" }}
                    borderRadius={"5px"}
                  >
                    <Image
                      src={imageSrc}
                      alt={`Imagem ${imageIndex + 1}`}
                      objectFit="contain"
                      maxW="100%"
                      maxH="100%"
                    />
                  </Flex>
                </Box>
              ))}
            </Flex>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};
