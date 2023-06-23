import { Box, Container, Flex } from '@chakra-ui/react';
import { useContext, useEffect } from 'react'
import { NavBarComponent } from '../../components/NavBar';
import { CardUserProfile } from '../../components/CardUserProfile';
import { ListCardProducts } from '../../components/ListCardProducts';
import { ProductContext } from '../../contexts/ProductsContext';
import api from '../../services/api';
import { CardAdminPublic } from '../../components/CardAdminPublic';

export const ViewAdminAnnouncementsPublic = () => {
  const token = localStorage.getItem("motors-shop:token");

  const { setProductsProfile, updatePage } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/cars/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [updatePage]);


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
  )
}
