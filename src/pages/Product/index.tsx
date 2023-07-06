import { Container, Flex, Box } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { CardMainImage } from "../../components/CardMainImage";
import { CardTitleCars } from "../../components/CardTitleCars";
import { CardDescriptionCars } from "../../components/CardDescriptionCars";
import { CardStoragePhoto } from "../../components/CardStoragePhoto";
import { CardCarOwner } from "../../components/CardCarOwner";
import { CommentsArea } from "../../components/CommenstsArea";
import { CardComment } from "../../components/CardComment";
import imageMainImage from '../../assets/img/imageCarMain.png'

export const Product = () => {
  const product = JSON.parse(localStorage.getItem("id-product-page:")!)
  let mainImage: string = product.images.length > 0 ? product.images[0].image : imageMainImage
  const filteredImages: Array<string> = product.images.filter((image: any, index: number) => {
    if(index !== 0) return image.image
  })
  const images: Array<string> = filteredImages.map((image: any) => {
    return image.image
  })

  return (
    <Box backgroundColor={"grey.9"} h={"100%"}>
      <NavBarComponent />
      <Box backgroundColor={"brand.1"} w={"100%"} h={"600px"}></Box>
      <Container
        minH="100vh"
        height="100%"
        maxW="1600px"
        paddingBottom={"200px"}
        marginTop={"100px"}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          marginTop={"-580px"}
          justifyContent={{ base: "center", xl: "space-between" }}
          alignItems={{ base: "center", xl: "normal" }}
          flexDirection={"column"}
        >
          <Flex
            gap={"20px"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", xl: "row" }}
          >
            <Flex flexDirection={"column"} gap={"20px"} paddingBottom={"20px"}>
              <CardMainImage mainImage={mainImage !== undefined ? mainImage : imageMainImage}/>
              <CardTitleCars />
              <CardDescriptionCars />
            </Flex>
            <Flex flexDirection={"column"} gap={"20px"} paddingBottom={"20px"}>
              <CardStoragePhoto images={images} />
              <CardCarOwner />
            </Flex>
          </Flex>
          <Flex flexDirection={"column"} gap={"20px"}>
            <CommentsArea />
            <CardComment />
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
