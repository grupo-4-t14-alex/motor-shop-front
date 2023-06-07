import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


export const NavBarComponent = () => {

  const navigate = useNavigate()

  return (
    <header>
        <h1>Motors shop</h1>
        <div>
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
        </div>
    </header>
  )
}