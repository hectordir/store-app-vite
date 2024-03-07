import { Stack, Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { discount } from "../../../bff-utils";
import Rating from "../../../components/Rating/Rating";

interface BodyProps {
  body: {
    id: number;
    title: string;
    thumbnail: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
  };
}

export const ProductBody = ({ body }: BodyProps) => {
  const { id, title, brand, category, price, discountPercentage, rating } =
    body;
  return (
    <>
      <Stack mt="6" spacing="3">
        <Box w="260px" h="140px" borderRadius="lg" pl="5px" pt="5px">
          <Text>{category}</Text>
          <NavLink to={`/products/${id}`}>
            <Text
              fontWeight={"bold"}
              textDecoration={"underline"}
              _hover={{
                textDecoration: "none",
                color: "gray.500",
              }}
            >
              {title}
            </Text>
          </NavLink>
          <Text>{brand}</Text>
        </Box>
        <Rating value={rating} />
        <Stack>
          <Box borderRadius="lg" pt="5px" pl="5px">
            <Text as="del" color="red">
              Precio: ${price}
            </Text>
            <Text fontSize="20px">
              Precio : ${discount(price, discountPercentage)}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
