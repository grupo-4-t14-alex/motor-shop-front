import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Img,
  useMediaQuery,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/img/logoHeader.png"
import { useEffect, useState } from 'react'


export const NavBarComponent = () => {

  const navigate = useNavigate()
  
  const [web, setWeb] = useState(true)

  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setWeb(!isMobileScreen);
  }, [isMobileScreen]);

  return (
    <Flex as={"header"}
      bg={"grey.10"}
      alignItems={"center"}
      justifyContent={"space-between"}
      h={{ base: "230px", md: "80px" }}
      paddingInline={{base: "60px", md: "60px"}}
      >
        <Img src={Logo} w={"153px"} h={"27px"} />

        {
          web ? (

          <Flex display={"flex"}>

            <Button onClick={() => navigate("/login")} bg={"none"} color={"grey.2"}>Fazer Login</Button>
            <Button onClick={() => navigate("/register")} bg={"none"} border={"1px"} borderColor={"grey.0"}>Cadastrar</Button>
          </Flex>
          ) : (

            <Menu>
              {({ isOpen }) => (
                <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <CloseIcon/> : <HamburgerIcon/> }>
                </MenuButton>
                <MenuList>
                <MenuItem>Carros</MenuItem>
                <MenuItem>Motos</MenuItem>
                <MenuItem>Leilão</MenuItem>
                <div>
                
                </div>
                <MenuItem onClick={() => navigate("/")}>Fazer Login</MenuItem>
                </MenuList>
                </>
              )}
            </Menu>
          )
        }
    </Flex>
  )
}