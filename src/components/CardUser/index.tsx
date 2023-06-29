import { Flex, Heading, useTheme } from "@chakra-ui/react";
import { useState } from "react";

interface name {
  name: string;
}

export const CardUser = ({ name }: name) => {
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]);
    return initials.join("");
  };

  return (
    <Flex alignItems={"center"} gap={"10px"}>
      <Flex
        backgroundColor={"brand.1"}
        width={"30px"}
        height={"30px"}
        borderRadius={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"whiteFixed"}
        fontSize={"body.2"}
        fontWeight={"medium"}
      >
        {getInitials(name)}
      </Flex>
      <Heading fontSize={"body.1"} fontWeight={"medium"} color={"grey.4"}>
        {name}
      </Heading>
    </Flex>
  );
};
