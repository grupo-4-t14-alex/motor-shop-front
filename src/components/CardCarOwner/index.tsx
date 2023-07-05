import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ProductContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import api from "../../services/api";

export const CardCarOwner = () => {
  const product = JSON.parse(localStorage.getItem("id-product-page:")!);

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]);
    return initials.join("");
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("motors-shop:token");
  const { setProductsProfilePublic, setProfilePublic } =
    useContext(ProductContext);

  const navigateProfilePublic = async () => {
    try {
      const response = await api.get(`/cars`);
      setProductsProfilePublic(
        response.data.filter((element: any) => {
          return element.user.id == product.user.id;
        })
      );
      try {
        const response = await api.get(`/users/${product.user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfilePublic(response.data);
        navigate("/profileAdminAnnoucementsPublic");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      w={{ base: "350px", md: "800px", xl: "400px" }}
      h={"400px"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"20px"}
      backgroundColor={"whiteFixed"}
      gap={"30px"}
      borderRadius={"5px"}
    >
      <Flex
        backgroundColor={"brand.1"}
        width={"100px"}
        height={"100px"}
        borderRadius={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"whiteFixed"}
        fontSize={"heading.1"}
      >
        {getInitials(product.user.name)}
      </Flex>
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        {product.user.name}
      </Heading>
      <Text
        fontSize={"body.1"}
        fontWeight={"medium"}
        color={"grey.3"}
        textAlign={"center"}
      >
        {product.user.description}
      </Text>
      <Button onClick={() => navigateProfilePublic()}>
        Ver todos anuncios
      </Button>
    </Flex>
  );
};
