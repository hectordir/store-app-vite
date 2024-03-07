import { Box, Text } from "@chakra-ui/layout";
import Rating from "../../../components/Rating/Rating";
import { VStack } from "@chakra-ui/react";
import { discount } from "../../../bff-utils";
import { Product } from "../../../interfaces/productos";

export const ProductDetailsBody = (product: Product) => {
  return (
    <VStack>
      <Text>{product.title}</Text>
      <Text>Descripcion : {product.description}</Text>
      <Text>Marca : {product.brand}</Text>
      <Text>Categoria : {product.category}</Text>
      <Box>
        <Rating value={product.rating} />
      </Box>
      <Text as="del">Precio : ${product.price}</Text>
      <Text>
        Precio con descuento : $
        {discount(product.price, product.discountPercentage)}
      </Text>
    </VStack>
  );
};
