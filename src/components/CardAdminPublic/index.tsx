import { Flex, Text } from "@chakra-ui/react";
// import { FormCreateAnnouncement } from "../formCreateAnnouncement";

interface iUser {
  name: string;
  description: string;
}

export const CardAdminPublic = () => {
  const userJson = localStorage.getItem("motors-shop:user");

  let userObj: iUser = {
    name: "",
    description: "",
  };

  if (userJson !== null) {
    userObj = JSON.parse(userJson);
  }

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]);
    return initials.join("");
  };

  return (
    <Flex
      backgroundColor={"whiteFixed"}
      w={"100%"}
      p={"40px"}
      flexDirection={"column"}
      gap={"20px"}
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
        {getInitials(userObj?.name)}
      </Flex>
      <Flex alignItems={"center"} gap={"20px"}>
        <Text fontSize={"heading.6"} fontWeight={"bold"}>
          {userObj?.name}
        </Text>
        <Text
          backgroundColor={"brand.4"}
          color={"brand.2"}
          padding={"7px"}
          borderRadius={"5px"}
          fontSize={"buttonMediumText"}
          fontWeight={"bold"}
        >
          Anunciante
        </Text>
      </Flex>
      <Text fontSize={"body.1"} color={"grey.3"}>
        {userObj?.description}
      </Text>
    </Flex>
  );
};
