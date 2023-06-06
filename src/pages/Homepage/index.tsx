import { Box } from '@chakra-ui/react'
import { NavBarComponent } from '../../components/NavBar'

export const Homepage = () => {

  return (
    <>
        <NavBarComponent />
        <Box bg='grey.1' w='100%' p={4} color='white'>
            Box Test
        </Box>
    </>
  )
}