import { Box, Text } from "@chakra-ui/layout";
import Rating from "../../../components/Rating/Rating";
import { VStack } from "@chakra-ui/react";
import { discount } from "../../../bff-utils";
import { useProduct } from "../../../hooks/useProduct";

export const ProductDetailsBody = () => {
  const { product } = useProduct();
  console.log(product);
  return (
    <VStack>
      <Text>{product?.title}</Text>
      <Text>Descripcion : {product?.description}</Text>
      <Text>Marca : {product?.brand}</Text>
      <Text>Categoria : {product?.category}</Text>
      <Box>
        <Rating value={product?.rating ?? 0} />
      </Box>
      <Text as="del">Precio : ${product?.price}</Text>
      <Text>
        Precio con descuento : $
        {discount(product?.price ?? 0, product?.discountPercentage ?? 0)}
      </Text>
    </VStack>
  );
};
