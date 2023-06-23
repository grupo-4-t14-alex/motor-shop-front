import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Img,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logoHeader.png";
import { useEffect, useState } from "react";
import { CardUser } from "../CardUser";
import { FormUpdateUser } from "../formUpdateUser";
import { FormUpdateAddress } from "../formUpdateAddress";

interface iUser {
  name: string;
  description: string;
}

export const NavBarComponent = () => {
  const navigate = useNavigate();

  const userJson = localStorage.getItem("motors-shop:user");

  let userObj: iUser = {
    name: "",
    description: "",
  };

  if (userJson !== null) {
    userObj = JSON.parse(userJson);
  }

  console.log(userObj);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [web, setWeb] = useState(true);

  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setWeb(!isMobileScreen);
  }, [isMobileScreen]);

  return (
    <Flex
      as={"header"}
      bg={"grey.10"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"80px"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      zIndex={"1"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW={"1600px"}
        width={"100%"}
        paddingInline={{ base: "16px", md: "16px" }}
        h={"100%"}
      >
        <Img src={Logo} w={"153px"} h={"27px"} />

        <Flex h={"100%"} alignItems={"center"} gap={"30px"}>
          <Box w={"2px"} h={"100%"} backgroundColor={"grey.7"} />
          {userObj.name != "" ? (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} border={"none"}>
                    <CardUser name={userObj.name} />
                  </MenuButton>
                  <MenuList>
                    <FormUpdateUser/>
                    <FormUpdateAddress/>
                    <MenuItem onClick={() => navigate("/profileViewAdmin")}>
                      Meus Anúncios
                    </MenuItem>
                    <MenuItem onClick={() => logout()}>Sair</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          ) : web ? (
            <Flex display={"flex"}>
              <Button variant="link" onClick={() => navigate("/login")}>
                Fazer Login
              </Button>
              <Button onClick={() => navigate("/register")} variant="outline2">
                Cadastrar
              </Button>
            </Flex>
          ) : (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button}>
                    {isOpen ? (
                      <CloseIcon w={"20px"} h={"20px"} />
                    ) : (
                      <HamburgerIcon w={"20px"} h={"20px"} />
                    )}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => navigate("/register")}>
                      Cadastrar
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/login")}>
                      Fazer Login
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
