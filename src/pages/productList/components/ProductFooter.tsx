import { Button, Stack } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Product } from "../../../interfaces/productos";
import { discount, getProducts } from "../../../bff-utils/index";
import Rating from "../../../components/Rating/Rating";
import { useCart } from "../../../states/useCart";

export default function CardBody() {
  const [datos, setDatos] = useState<Product[]>([]);
  const { handleAddCart } = useCart();

  async function getData() {
    const productos = await getProducts();
    setDatos(productos);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {datos.map((producto: Product) => (
        <Stack direction="column" flexWrap="wrap" spacing={4}>
          <Rating value={producto.rating} />
          <Box borderRadius="lg" pt="5px" pl="5px">
            <Text as="del" color="red">
              Precio: ${producto.price}
            </Text>
            <Text fontSize="20px">
              Precio : ${discount(producto.price, producto.discountPercentage)}
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
      ))}
    </>
  );
}
