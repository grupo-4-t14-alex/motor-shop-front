import { Container, Image, Flex, Box } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import imgHomePage from "../../assets/img/imgHomePage.png";
import { ListCardProducts } from "../../components/ListCardProducts";

export const Homepage = () => {
  return (
    <Box backgroundColor={"grey.9"}>
      <NavBarComponent />
      <Container minH="100vh" height="100%" maxW="1600px" marginTop={"100px"}>
        <Image src={imgHomePage} />
        <Flex w={"100%"} h={"100%"}>
          <Filter />
          <Box w={"100%"}>
            <ListCardProducts />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
