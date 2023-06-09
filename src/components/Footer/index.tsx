import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import Logo from "../../assets/img/logoFooter.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      as={"footer"}
      bg={"grey.1"}
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      alignItems={"center"}
      justifyContent={"center"}
      h={{ base: "230px", md: "100px" }}
      padding={"10px"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
        paddingInline={{ base: "16px", md: "16px" }}
        w={"100%"}
        h={"100%"}
        maxW={"1600px"}
        alignItems={"center"}
      >
        <Img src={Logo} w={"150px"} h={"26px"} />
        <Text fontSize={"body.2"} color={"whiteFixed"} fontWeight={"normal"}>
          © 2022 - Todos os direitos reservados.
        </Text>
        <Button bg={"grey.2"} onClick={scrollToTop}>
          <ChevronUpIcon color={"whiteFixed"} />
        </Button>
      </Flex>
    </Flex>
  );
};
