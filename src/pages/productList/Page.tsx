import { Producto } from "../../interfaces/productos";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { useCart } from "../../states/useCart";
import { discount, getProducts } from "../../bff-utils";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContentLayout } from "../../components/BasePage";
import Body from "./components/Body";

export default function ProductsList() {
  const [datos, setDatos] = useState<Producto[]>([]);
  const { handleAddCart } = useCart();

  const cardBg = useColorModeValue("white", "#555555");

  async function getData() {
    const productos = await getProducts();
    setDatos(productos);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContentLayout
      direction="row"
      flexWrap="wrap"
      spacing={4}
      justifyContent="center"
      p="10px"
      overflow={"scroll"}
    >
      {datos.map((producto: Producto) => (
        <Card maxW="sm" backgroundColor={cardBg} boxShadow={"md"}>
          <Body />
        </Card>
      ))}
    </ContentLayout>
  );
}

/* 

          <CardBody>
            <Image
              src={producto.thumbnail}
              alt={producto.title}
              borderRadius="lg"
              w="260px"
              h="200px"
            />
            <Stack mt="6" spacing="3">
              <Box w="260px" h="140px" borderRadius="lg" pl="5px" pt="5px">
                <Text>{producto.category}</Text>
                <NavLink to={`/products/${producto.id}`}>
                  <Text
                    fontWeight={"bold"}
                    textDecoration={"underline"}
                    _hover={{
                      textDecoration: "none",
                      color: "gray.500",
                    }}
                  >
                    {producto.title}
                  </Text>
                </NavLink>
                <Text>{producto.brand}</Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <Stack direction="column" flexWrap="wrap" spacing={4}>
              <Rating value={producto.rating} />
              <Box borderRadius="lg" pt="5px" pl="5px">
                <Text as="del" color="red">
                  Precio: ${producto.price}
                </Text>
                <Text fontSize="20px">
                  Precio : $
                  {discount(producto.price, producto.discountPercentage)}
                </Text>
              </Box>
              <Button
                variant="solid"
                colorScheme="blue"
                width="260px"
                onClick={() => handleAddCart(producto)}
              >
                Añadir
              </Button>
            </Stack>
          </CardFooter>

*/
