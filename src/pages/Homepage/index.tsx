import { Container, Image } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";

export const Homepage = () => {
  return (
    <>
      <NavBarComponent />
      <Container minH="100vh" height="100%" maxW="1600px" pb="60px">
        <Image src={imgHomePage} />
        <Filter />
        <Footer />
      </Container>
      <Box bg="grey.1" w="100%" p={4} color="white">
        Box Test
      </Box>
      <Button variant="solid" bg="brand.2" color="whiteFixed">
        Teste
      </Button>
      <Filter />
      <CardCarOwner />
      <Footer />
    </>
  );
};
