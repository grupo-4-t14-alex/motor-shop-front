import { Box } from "@chakra-ui/react";
import { NavBarComponent } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { ListCardProducts } from "../../components/ListCardProducts";

export const ProfileViewAdmin = () => {
  return (
    <>
      <NavBarComponent />
      <Box h={"100%"} backgroundColor={"grey.9"}>
        <ListCardProducts />
      </Box>
      <Footer />
    </>
  );
};
