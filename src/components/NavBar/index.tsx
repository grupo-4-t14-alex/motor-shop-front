import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Img,
  Container,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/img/logoHeader.png"


export const NavBarComponent = () => {

  const navigate = useNavigate()

  return (
    <Flex as={"header"}
      bg={"grey.10"}
      alignItems={"center"}
      justifyContent={"space-between"}
      h={{ base: "230px", md: "80px" }}
      paddingInline={{base: "60px", md: "60px"}}
      >
        <Img src={Logo} w={"153px"} h={"27px"} />
          <Flex display={"flex"} gap="10px">
            <Button onClick={() => navigate("/login")} bg={"none"} color={"grey.2"}>Fazer Login</Button>
            <Button onClick={() => navigate("/register")} bg={"none"} border={"1px"} borderColor={"grey.0"}>Cadastrar</Button>
            {/* <Menu>
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
              </Menu> */}
          </Flex>
    </Flex>
  )
}