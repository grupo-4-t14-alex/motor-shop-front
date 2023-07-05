import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";

export const CardTitleCars = () => {
  interface Address {
    cep: string;
    estate: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  }

  interface Car {
    brand: string;
    model: string;
    year: number;
    fuel: number;
    km: number;
    color: string;
    fipePrice: number;
    sellPrice: number;
    description: string;
    id: number;
    isActive: boolean;
  }

  interface User {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    description: string;
    admin: boolean;
    address: Address;
    id: number;
    cars: Car[];
  }

  const carInfoJson = localStorage.getItem("id-product-page:") || "undefined";
  const userInfoJson = localStorage.getItem("motors-shop:user") || "undefined";

  const carInfo = JSON.parse(carInfoJson);

  const [user, setUser] = useState({} as User);

  useEffect(() => {
    try {
      api.get(`/users/${carInfo.user.id}`).then((response) => {
        setUser(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handlerWhatsapp = () => {
    const fromatedNumber = user.phone.replace(/\D/g, "");
    const whatsappLink = `https://api.whatsapp.com/send?phone=${fromatedNumber}`;
    window.location.href = whatsappLink;
  };

  return (
    <Flex
      w={{ base: "350px", md: "800px" }}
      h={{ base: "350px", md: "250px" }}
      flexDirection={"column"}
      justifyContent={"space-between"}
      backgroundColor={"whiteFixed"}
      gap={"40px"}
      borderRadius={"5px"}
      padding={"40px"}
    >
      <Heading fontSize={"heading.6"} fontWeight={"bold"}>
        {carInfo.model}
      </Heading>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        h={"100%"}
      >
        <Flex
          justifyContent={"space-between"}
          gap={"20px"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex gap={"10px"}>
            <Text
              backgroundColor={"brand.4"}
              color={"brand.2"}
              padding={"7px"}
              borderRadius={"5px"}
              fontSize={"buttonMediumText"}
              fontWeight={"medium"}
            >
              {carInfo.year}
            </Text>
            <Text
              backgroundColor={"brand.4"}
              color={"brand.2"}
              padding={"7px"}
              borderRadius={"5px"}
              fontSize={"buttonMediumText"}
              fontWeight={"medium"}
            >
              {carInfo.km} KM
            </Text>
          </Flex>
          <Text>R$ {carInfo.sellPrice}</Text>
        </Flex>

        <Button w={"100px"} variant="brand1" onClick={handlerWhatsapp}>Comprar</Button>
      </Flex>
    </Flex>
  );
};
