import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import imgTeste from "../../assets/img/imgteste.png";
import imgIcon from "../../assets/img/iconCard.png";
import { CardUser } from "../CardUser";

export const CardProducts = () => {
  return (
    <Card w={"300px"} h={"350px"} variant="unstyled">
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
          <Image src={imgTeste} />
        </Flex>
        <Stack mt="4" spacing="3">
          <Heading fontSize={"heading.7"} fontWeight={"bold"}>
            Maserati - Ghibli
          </Heading>
          <Text
            noOfLines={2}
            color={"grey.4"}
            fontSize={"body.2"}
            fontWeight={"normal"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            hendrerit nisi non sem tincidunt, ut iaculis enim sagittis.
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
                0 KM
              </Text>
              <Text
                backgroundColor={"brand.4"}
                color={"brand.2"}
                padding={"7px"}
                borderRadius={"5px"}
                fontSize={"buttonMediumText"}
                fontWeight={"medium"}
              >
                2019
              </Text>
            </Flex>
            <Text fontSize={"heading.7"} fontWeight={"bold"}>
              R$ 00.000,00
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
