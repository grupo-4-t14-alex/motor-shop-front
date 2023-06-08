import { Box, Button, Card } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { CardDescriptionCars } from "../../components/CardDescriptionCars";

export const Homepage = () => {
  return (
    <>
      <NavBarComponent />
      <Box bg="grey.1" w="100%" p={4} color="white">
        Box Test
      </Box>
      <Button variant="solid" bg="brand.2" color="whiteFixed">
        Teste
      </Button>
      <CardDescriptionCars />
      <Footer />
    </>
  );
};
