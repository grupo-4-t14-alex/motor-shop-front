import { Box, Button } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { CardCarOwner } from "../../components/CardCarOwner";

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
      <CardCarOwner />
      <Footer />
    </>
  );
};
