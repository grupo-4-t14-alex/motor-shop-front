import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react'
import { NavBarComponent } from '../../components/NavBar';
import { CardUserProfile } from '../../components/CardUserProfile';
import { ListCardProducts } from '../../components/ListCardProducts';

export const ViewAdminAnnouncements = () => {

    const token = localStorage.getItem("motors-shop:token");

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
    </Box>
  )
}
