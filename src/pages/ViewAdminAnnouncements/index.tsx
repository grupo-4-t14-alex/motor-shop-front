import { Box, Container, Flex } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { ListCardProducts } from "../../components/ListCardProducts";
import { CardAdminPublic } from "../../components/CardAdminPublic";

export const ViewAdminAnnouncementsPublic = () => {
  return (
    <Box backgroundColor={"grey.9"} h={"100%"}>
      <NavBarComponent />
      <Box backgroundColor={"brand.1"} w={"100%"} h={"400px"}></Box>
      <Container minH="100vh" height="100%" maxW="1600px" marginTop={"100px"}>
        <Flex w={"100%"} h={"100%"} marginTop={"-320px"} marginBottom={"50px"}>
          <CardAdminPublic />
        </Flex>
        <ListCardProducts />
      </Container>
    </Box>
  );
};
