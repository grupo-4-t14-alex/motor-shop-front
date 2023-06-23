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
} from "@chakra-ui/react";
import imgTeste from "../../assets/img/imgteste.png";
import imgIcon from "../../assets/img/iconCard.png";
import { CardUser } from "../CardUser";

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
  };
}

export const CardProducts = ({ product }: iProducts) => {
  return (
    <Card
      w={"300px"}
      h={"350px"}
      variant="unstyled"
      zIndex={"0"}
      backgroundColor={"grey.9"}
    >
      <CardBody marginBottom={0}>
        <Flex
          w={"100%"}
          h={"150px"}
          backgroundColor={"grey.7"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Image
            src={imgIcon}
            position={"absolute"}
            top={"0"}
            right={"0"}
            padding={"0"}
          />
          {window.location.pathname === "/profileAdminAnnoucements" && (
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
            </Flex>
          )}
          <Image src={imgTeste} />
        </Flex>
        <Stack mt="4" spacing="3">
          <Heading fontSize={"heading.7"} fontWeight={"bold"}>
            {product.brand}
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
          <CardUser />
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
      </CardBody>
    </Card>
  );
};
