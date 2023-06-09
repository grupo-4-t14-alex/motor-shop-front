import { Container, Image, Flex, OrderedList } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import imgHomePage from "../../assets/img/imgHomePage.png";
import { CardProducts } from "../../components/CardProducts";

export const Homepage = () => {
  return (
    <>
      <NavBarComponent />
      <Container
        minH="100vh"
        height="100%"
        maxW="1600px"
        paddingBottom={"200px"}
        marginBottom={"500px"}
        marginTop={"100px"}
      >
        <Image src={imgHomePage} />
        <Flex w={"100%"} h={"100%"}>
          <Filter />
          <OrderedList
            marginTop={"40px"}
            w={"100%"}
            h={"400px"}
            maxW={"70%"}
            display={"grid"}
            // flexWrap={"wrap"}
            // justifyContent={"space-between"}
            gridTemplateColumns={"repeat(3, 1fr)"}
            gap={6}
          >
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
          </OrderedList>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};
