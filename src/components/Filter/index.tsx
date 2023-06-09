import { Box, Flex, Input, Text } from "@chakra-ui/react";

export const Filter = () => {
  return (
    <Flex
      h="90vh"
      mb="100px"
      maxW="25%"
      w={"100%"}
      mt="40px"
      ml="20px"
      flexDirection="column"
      gap="15px"
    >
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Marca
        </Text>
        <Box pl="10px" mt="15px">
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            General Motors
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Fiat
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Ford
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Honda
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Toyota
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Volkswagen
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Modelo
        </Text>
        <Box pl="10px" mt="20px">
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Civic
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Corolla
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Cruze
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Fit
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Gol
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Ka
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Onix
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Porsche 718
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Cor
        </Text>
        <Box pl="10px" mt="20px">
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Azul
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Branca
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Cinza
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Prata
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Preta
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Verde
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Ano
        </Text>
        <Box pl="10px" mt="20px">
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2022
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2021
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2018
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2015
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2013
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2012
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            2010
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Combustível
        </Text>
        <Box pl="10px" mt="20px">
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Diesel
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Etanol
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Gasolina
          </Text>
          <Text fontSize="heading.6" fontWeight="500" color="grey.4">
            Flex
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Km
        </Text>
        <Flex gap="20px" pl="10px" mt="20px">
          <Input
            bg="grey.5"
            placeholder="Mínima"
            disabled
            maxW="125px"
            borderRadius="0"
          />
          <Input
            bg="grey.5"
            placeholder="Máxima"
            disabled
            maxW="125px"
            borderRadius="0"
          />
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Preço
        </Text>
        <Flex gap="20px" pl="10px" mt="20px">
          <Input
            bg="grey.5"
            placeholder="Mínima"
            disabled
            maxW="125px"
            borderRadius="0"
          />
          <Input
            bg="grey.5"
            placeholder="Máxima"
            disabled
            maxW="125px"
            borderRadius="0"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
