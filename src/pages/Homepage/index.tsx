import { Container, Image } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import imgHomePage from "../../assets/img/imgHomePage.png";

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
        <Filter />
      </Container>
      <Footer />
    </>
  );
};
