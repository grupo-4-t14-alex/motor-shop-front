import { Flex, Heading, useTheme } from "@chakra-ui/react";
import { useState } from "react";

interface name {
  name: string;
}

export const CardUser = ({ name }: name) => {
  const theme = useTheme();
  const [randomColor, setRandomColor] = useState("");

  const getRandomColor = () => {
    const colorValues = Object.keys(theme.colors.random);
    const randomIndex = Math.floor(Math.random() * colorValues.length);
    const randomColor = colorValues[randomIndex];
    return randomColor;
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]);
    return initials.join("");
  };

  const setRandomUserColor = () => {
    const newRandomColor = "random." + getRandomColor();
    setRandomColor(newRandomColor);
  };

  if (!randomColor) {
    setRandomUserColor();
  }

  return (
    <Flex alignItems={"center"} gap={"10px"}>
      <Flex
        backgroundColor={randomColor}
        width={"30px"}
        height={"30px"}
        borderRadius={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"whiteFixed"}
      >
        {getInitials(name)}
      </Flex>
      <Heading fontSize={"body.2"} fontWeight={"bold"} color={"grey.4"}>
        {name}
      </Heading>
    </Flex>
  );
};
