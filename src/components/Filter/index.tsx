import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ProductContext } from "../../contexts/ProductsContext";
import { useContext, useEffect, useState } from "react";

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
  [key: string]: any;
}

type Sort = "asc" | "desc";

export const Filter = () => {
  const {
    products,
    setProductsFiltered,
    productsFiltered,
    setProductsSorted,
    productsSorted,
  } = useContext(ProductContext);

  const [models, setModels] = useState<string>("");
  const [brands, setBrands] = useState<string>("");
  const [years, setYears] = useState<number>(0);
  const [colors, setColors] = useState<string>("");
  const [fuels, setFuels] = useState<number>(0);

  const uniqueBrands: Set<string> = new Set();
  const uniqueModels: Set<string> = new Set();
  const uniqueYears: Set<number> = new Set();
  const uniqueFuels: Set<number> = new Set();
  const uniqueColors: Set<string> = new Set();

  productsFiltered.length > 0
    ? productsFiltered.forEach((product) => {
        uniqueBrands.add(product.brand);
        uniqueModels.add(product.model);
        uniqueYears.add(product.year);
        uniqueFuels.add(product.fuel);
        uniqueColors.add(product.color);
      })
    : products.forEach((product) => {
        uniqueBrands.add(product.brand);
        uniqueModels.add(product.model);
        uniqueYears.add(product.year);
        uniqueFuels.add(product.fuel);
        uniqueColors.add(product.color);
      });

  const uniqueBrandsArray: string[] = Array.from(uniqueBrands);
  const uniqueModelsArray: string[] = Array.from(uniqueModels);
  const uniqueYearsArray: number[] = Array.from(uniqueYears);
  const uniqueFuelsArray: number[] = Array.from(uniqueFuels);
  const uniqueColorsArray: string[] = Array.from(uniqueColors);

  const filters: Partial<iProducts> = {};

  const filterProperties = [
    { key: "brand", value: brands },
    { key: "year", value: years },
    { key: "color", value: colors },
    { key: "fuel", value: fuels },
    { key: "model", value: models },
  ];

  filterProperties.forEach(({ key, value }) => {
    if (value) {
      filters[key] = value;
    }
  });

  const filterProducts = (
    products: iProducts[],
    filters: Partial<iProducts>
  ): iProducts[] => {
    return products.filter((product) => {
      for (const key in filters) {
        if (key.includes(".")) {
          const nestedKeys = key.split(".");
          let nestedValue = product;
          for (const nestedKey of nestedKeys) {
            if (nestedValue === undefined || nestedValue === null) {
              return false;
            }
            nestedValue = nestedValue[nestedKey];
          }
          if (nestedValue !== filters[key]) {
            return false;
          }
        } else if (product[key] !== filters[key]) {
          return false;
        }
      }
      return true;
    });
  };

  const clearFilter = () => {
    setBrands("");
    setColors("");
    setFuels(0);
    setModels("");
    setYears(0);
    setProductsSorted([]);
    setProductsFiltered([]);
    console.log(productsSorted);
  };

  useEffect(() => {
    (async () => {
      const filteredCars = filterProducts(products, filters);
      setProductsFiltered(filteredCars);
    })();
  }, [models, brands, fuels, years, colors]);

  const sortArray = (
    array: iProducts[],
    key: keyof iProducts,
    sort: Sort
  ): void => {
    const arraySorted = array.sort((a: iProducts, b: iProducts) => {
      const valorA = a[key];
      const valorB = b[key];

      if (sort === "asc") {
        return valorA - valorB;
      } else {
        return valorB - valorA;
      }
    });

    setProductsSorted(arraySorted);
  };

  const handleSortClick = (key: keyof iProducts, sort: Sort): void => {
    if (productsFiltered.length > 0) {
      sortArray(productsFiltered, key, sort);
    } else {
      sortArray(products, key, sort);
    }
  };

  return (
    <Flex
      mb="100px"
      maxW="25%"
      w={"100%"}
      mt="40px"
      ml="20px"
      flexDirection="column"
      gap="15px"
      zIndex={0}
      display={{ base: "none", md: "flex" }}
      marginBottom={"200px"}
    >
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Marca
        </Text>
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          pl="10px"
          mt="15px"
        >
          {uniqueBrandsArray.map((element) => {
            return (
              <Button
                border={"none"}
                fontSize="heading.6"
                fontWeight="500"
                color="grey.4"
                cursor="pointer"
                onClick={() => setBrands(brands === element ? "" : element)}
              >
                {element}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Modelo
        </Text>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          pl="10px"
          mt="20px"
          alignItems={"flex-start"}
        >
          {uniqueModelsArray.map((element) => {
            return (
              <Button
                border={"none"}
                fontSize="heading.6"
                fontWeight="500"
                color="grey.4"
                cursor="pointer"
                onClick={() => setModels(models === element ? "" : element)}
              >
                {element}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Cor
        </Text>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          pl="10px"
          mt="20px"
          alignItems={"flex-start"}
        >
          {uniqueColorsArray.map((element) => {
            return (
              <Button
                border={"none"}
                fontSize="heading.6"
                fontWeight="500"
                color="grey.4"
                cursor="pointer"
                onClick={() => setColors(colors === element ? "" : element)}
              >
                {element}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Ano
        </Text>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          pl="10px"
          mt="20px"
          alignItems={"flex-start"}
        >
          {uniqueYearsArray.map((element) => {
            return (
              <Button
                border={"none"}
                fontSize="heading.6"
                fontWeight="500"
                color="grey.4"
                cursor="pointer"
                onClick={() => setYears(years === element ? 0 : element)}
              >
                {element}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Combustível
        </Text>
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          pl="10px"
          mt="20px"
          alignItems={"flex-start"}
        >
          {uniqueFuelsArray.map((element) => {
            return (
              <Button
                border={"none"}
                fontSize="heading.6"
                fontWeight="500"
                color="grey.4"
                cursor="pointer"
                onClick={() => setFuels(fuels === element ? 0 : element)}
              >
                {element === 1
                  ? "Diesel"
                  : element === 2
                  ? "Gasoline"
                  : element === 3
                  ? "Ethanol"
                  : "Unknown Fuel"}
              </Button>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Km
        </Text>
        <Flex gap="20px" mt="20px" justifyContent={"space-between"}>
          <Button
            bg="grey.5"
            w="170px"
            borderRadius="0"
            variant={"negative"}
            onClick={() => handleSortClick("km", "asc")}
          >
            Min
          </Button>
          <Button
            bg="grey.5"
            w="170px"
            borderRadius="0"
            variant={"negative"}
            onClick={() => handleSortClick("km", "desc")}
          >
            Max
          </Button>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="heading.4" fontWeight="600">
          Preço
        </Text>
        <Flex gap="20px" mt="20px" justifyContent={"space-between"}>
          <Button
            bg="grey.5"
            w="170px"
            borderRadius="0"
            variant="negative"
            onClick={() => handleSortClick("sellPrice", "asc")}
          >
            Min
          </Button>
          <Button
            bg="grey.5"
            w="170px"
            borderRadius="0"
            variant="negative"
            onClick={() => handleSortClick("sellPrice", "desc")}
          >
            Max
          </Button>
        </Flex>
      </Box>
      <Button marginTop={"20px"} variant="brand1" onClick={() => clearFilter()}>
        Limpar filtro
      </Button>
    </Flex>
  );
};
