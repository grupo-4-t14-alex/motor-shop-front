import { Container, Image } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import imgHomePage from "../../assets/img/imgHomePage.png"


export const Homepage = () => {
  return (
    <Container minH="100vh" height="100%" maxW="1600px" pb="60px">
      <NavBarComponent />
      <Image src={imgHomePage}/>
      <Filter/>
      <Footer />
    </Container>
  );
};
