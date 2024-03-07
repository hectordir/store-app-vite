import { Box, Text } from "@chakra-ui/layout";
import Rating from "../../../components/Rating/Rating";
import { VStack } from "@chakra-ui/react";
import { discount } from "../../../bff-utils";

interface BodyProps {
  body: {
    id: number;
    title: string;
    thumbnail: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
  };
}
export const ProductDetailsBody = ({ body }: BodyProps) => {
  const {
    description,
    title,
    brand,
    category,
    price,
    discountPercentage,
    rating,
  } = body;
  return (
    <VStack>
      <Text>{title}</Text>
      <Text>Descripcion : {description}</Text>
      <Text>Marca : {brand}</Text>
      <Text>Categoria : {category}</Text>
      <Box>
        <Rating value={rating} />
      </Box>
      <Text as="del">Precio : ${price}</Text>
      <Text>Precio con descuento : ${discount(price, discountPercentage)}</Text>
    </VStack>
  );
};
