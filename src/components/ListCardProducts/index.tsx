import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { CardProducts } from "../CardProducts";
import { ProductContext } from "../../contexts/ProductsContext";
import { useContext } from "react";

interface iProducts {
  id: number;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  km: number;
  color: string;
  fipePrice: number;
  sellPrice: number;
  description: string;
  isActive: boolean;
  user: {
    id: number;
    name: string;
    description: string;
  };
}

export const ListCardProducts = () => {
  const { productsProfile, products, productsFiltered, productsSorted } =
    useContext(ProductContext);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<iProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    (async () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      setTotalItems(
        window.location.pathname === "/profileViewAdmin" ||
          window.location.pathname === "/profileAdminAnnoucementsPublic"
          ? productsProfile.length
          : window.location.pathname === "/"
          ? productsFiltered.length > 0
            ? productsFiltered.length
            : products.length
          : productsSorted.length > 0
          ? productsSorted.length
          : 0
      );

      setCurrentItems(
        window.location.pathname === "/profileViewAdmin" ||
          window.location.pathname === "/profileAdminAnnoucementsPublic"
          ? productsProfile.slice(startIndex, endIndex)
          : window.location.pathname === "/"
          ? productsFiltered.length > 0
            ? productsFiltered.slice(startIndex, endIndex)
            : products.slice(startIndex, endIndex)
          : productsSorted.length > 0
          ? productsSorted.slice(startIndex, endIndex)
          : []
      );
    })();
  }, [
    productsFiltered,
    products,
    productsProfile,
    currentPage,
    productsSorted,
  ]);

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
