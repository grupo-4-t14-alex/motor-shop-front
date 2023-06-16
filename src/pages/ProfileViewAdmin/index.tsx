import { Box, Container, Flex } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { ListCardProducts } from "../../components/ListCardProducts";
import { CardUserProfile } from "../../components/CardUserProfile";
import { useContext, useEffect } from "react";
import api from "../../services/api";
import { ProductContext } from "../../contexts/ProductsContext";

export const ProfileViewAdmin = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmFoQG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4NjkzMzM1MiwiZXhwIjoxNjg3MDE5NzUyLCJzdWIiOiIxIn0.4jwnvqbZgQ2r4bhymneA7EQTVl2Ml26ErJROa42-lUg";

  const { setProductsProfile, productsProfile } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/cars/:1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data);
        setProductsProfile(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(productsProfile);

  return (
    <Box backgroundColor={"grey.9"} h={"100%"}>
      <NavBarComponent />
      <Box backgroundColor={"brand.1"} w={"100%"} h={"400px"}></Box>
      <Container minH="100vh" height="100%" maxW="1600px" marginTop={"100px"}>
        <Flex w={"100%"} h={"100%"} marginTop={"-320px"} marginBottom={"50px"}>
          <CardUserProfile />
        </Flex>
        <ListCardProducts />
      </Container>
      <Footer />
    </Box>
  );
};
