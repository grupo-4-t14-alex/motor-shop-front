import { Container, Image, Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import imgHomePage from "../../assets/img/imgHomePage.png";
import { ListCardProducts } from "../../components/ListCardProducts";
import { ModalFilter } from "../../components/Filter/modalFilter";

export const Homepage = () => {
  const {onOpen, isOpen, onClose} = useDisclosure()
  return (
    <Box backgroundColor={"grey.9"}>
      <NavBarComponent />
      <Container minH="100vh" height="100%" maxW="1600px" marginTop={"100px"}>
        <Image src={imgHomePage} />
        <Button display={{base:"inline-flex", md: "none"}} onClick={onOpen}>Filtro</Button>
        <Flex w={"100%"} h={"100%"}>
          <Filter />
          <Box w={"100%"}>
            <ListCardProducts />
          </Box>
        </Flex>
        {isOpen && <ModalFilter isOpen={isOpen} onClose={onClose}/>}
      </Container>
      <Footer />
    </Box>
  );
};
