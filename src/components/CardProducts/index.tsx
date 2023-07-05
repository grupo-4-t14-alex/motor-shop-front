import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import imgTeste from "../../assets/img/imgteste.png";
import { CardUser } from "../CardUser";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import api from "../../services/api";
import { FormUpdateAnnouncement } from "../formUpdateAnnoucement";
import iconCard from "../../assets/img/iconCard.png"

interface iProducts {
  product: {
    id: number;
    brand: string;
    model: string;
    year: number;
    fuel: number;
    km: number;
    color: string;
    fipePrice: number;
    sellPrice: number;
    description: string;
    isActive: boolean;
    user: {
      id: number;
      name: string;
      description: string;
    };
    images: {
      id: number,
      name: string,
      image: string
    }[]
  };
}

export const CardProducts = ({ product }: iProducts) => {
  function isCarValueLowerBy5Percent(
    carValue: number,
    fipeValue: number
  ): boolean {
    const difference = fipeValue - carValue;
    const percentage = (difference / fipeValue) * 100;

    return percentage >= 5;
  }

  const path = window.location.pathname;
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

  const navigatePageProduct = async () => {
    navigate("/product");
    localStorage.setItem("id-product-page:", JSON.stringify(product));
  };

  return (
    <Card
      w={"300px"}
      h={"350px"}
      variant="unstyled"
      zIndex={"0"}
      backgroundColor={"grey.9"}
      onClick={
        path === "/products" || path === "/"
          ? () => navigatePageProduct()
          : undefined
      }
      cursor={"pointer"}
    >
      <CardBody marginBottom={0}>
        <Flex
          w={"100%"}
          h={"150px"}
          backgroundColor={"grey.7"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          overflow="hidden"
        >
          {isCarValueLowerBy5Percent(product.sellPrice, product.fipePrice) && (
            <Image
              src={product.images[0].image ? product.images[0].image : iconCard}
              position={"absolute"}
              top={"0"}
              right={"0"}
              padding={"0"}
            />
          )}
          {window.location.pathname === "/profileViewAdmin" && (
            <Flex
              position={"absolute"}
              top={"0"}
              left={"0"}
              padding={"0"}
              margin={"10px"}
              backgroundColor={"brand.2"}
              paddingInline={"5px"}
              paddingY={"1px"}
            >
              <Text color={"whiteFixed"} fontSize={"body.2"}>
                {product.isActive ? "Ativo" : "Inativo"}
              </Text>
            </Flex>
          )}
          <Image src={imgTeste} />
        </Flex>
        <Stack mt="4" spacing="3">
          <Heading fontSize={"heading.7"} fontWeight={"bold"}>
            {product.model}
          </Heading>
          <Text
            noOfLines={2}
            color={"grey.4"}
            fontSize={"body.2"}
            fontWeight={"normal"}
          >
            {product.description}
          </Text>
        </Stack>
        <Flex mt={"20px"} flexDirection={"column"} gap={"20px"}>
          {window.location.pathname === "/profileViewAdmin" ||
          window.location.pathname === "/profileAdminAnnoucementsPublic" ? (
            <Box cursor={"pointer"}>
              <CardUser name={product.user.name} />
            </Box>
          ) : (
            <Box onClick={() => navigateProfilePublic()} cursor={"pointer"}>
              <CardUser name={product.user.name} />
            </Box>
          )}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex gap={"10px"}>
              <Text
                backgroundColor={"brand.4"}
                color={"brand.2"}
                padding={"7px"}
                borderRadius={"5px"}
                fontSize={"buttonMediumText"}
                fontWeight={"medium"}
              >
                {product.km} KM
              </Text>
              <Text
                backgroundColor={"brand.4"}
                color={"brand.2"}
                padding={"7px"}
                borderRadius={"5px"}
                fontSize={"buttonMediumText"}
                fontWeight={"medium"}
              >
                {product.year}
              </Text>
            </Flex>
            <Text fontSize={"heading.7"} fontWeight={"bold"}>
              R$ {product.sellPrice}
            </Text>
          </Flex>
        </Flex>
        {window.location.pathname === "/profileViewAdmin" && (
          <ButtonGroup marginTop={"20px"}>
            <FormUpdateAnnouncement product={product} />
            <Button variant="outline1">Ver detalhes</Button>
          </ButtonGroup>
        )}
      </CardBody>
    </Card>
  );
};
