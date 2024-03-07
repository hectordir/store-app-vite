import { Product } from "../../interfaces/productos";
import { useEffect } from "react";
import { ContentLayout } from "../../components/BasePage";
import { ProductCard } from "./components/ProductCard";
import { useProducts } from "../../hooks/useProduct";

export default function ProductsList() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {products.map((producto: Product) => (
        <ProductCard {...producto} />
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
