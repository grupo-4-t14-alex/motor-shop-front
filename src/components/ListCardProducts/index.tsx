import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CardProducts } from "../CardProducts";
import { ProductContext } from "../../contexts/ProductsContext";
import { useContext } from "react";

export const ListCardProducts = () => {
  const { productsProfile, products } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems =
    window.location.pathname === "/profileViewAdmin"
      ? productsProfile.length
      : products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems =
    window.location.pathname === "/profileViewAdmin"
      ? productsProfile.slice(startIndex, endIndex)
      : products.slice(startIndex, endIndex);

  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Flex
        overflowX={{ base: "auto", md: "unset" }}
        overflowY={"hidden"}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingBottom={"20px"}
      >
        {currentItems.map((element, index) => (
          <Box padding={"20px"} marginBottom={"20px"}>
            <CardProducts product={element} key={index} />
          </Box>
        ))}
      </Flex>

      <Flex
        mt={4}
        marginBottom={{ base: "230", md: "150" }}
        marginTop={{ base: "50", md: "100" }}
        alignItems={"center"}
        gap={"30px"}
      >
        <Text color={"grey.4"} fontSize={"heading.6"}>
          {currentPage} de {totalPages}
        </Text>
        <Box>
          {currentPage > 1 && (
            <Button
              variant={"ghost"}
              mr={2}
              onClick={handlePreviousPage}
              leftIcon={<ChevronLeftIcon />}
              color={"brand.1"}
              fontSize={"heading.6"}
            >
              Anterior
            </Button>
          )}
          {currentPage < totalPages && (
            <Button
              variant={"ghost"}
              onClick={handleNextPage}
              rightIcon={<ChevronRightIcon />}
              color={"brand.1"}
              fontSize={"heading.6"}
            >
              Seguinte
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
