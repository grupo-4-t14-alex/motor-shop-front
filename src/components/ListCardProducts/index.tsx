import {
  Box,
  Flex,
  Text,
  Button,
  Wrap,
  WrapItem,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CardProducts } from "../CardProducts";

export const ListCardProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const cardData = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cardData.slice(startIndex, endIndex);

  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Flex
        overflowX={{ base: "auto", md: "unset" }}
        overflowY={{ base: "auto", md: "unset" }}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        w={"100%"}
      >
        {currentItems.map(() => (
          <Box padding={"20px"} marginBottom={"20px"}>
            <CardProducts />
          </Box>
        ))}
      </Flex>

      <Flex
        mt={4}
        marginBottom={{ base: "200", md: "150" }}
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
