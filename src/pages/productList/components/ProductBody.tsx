import { Stack, Image, Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface BodyProps {
  body: {
    id: number;
    title: string;
    thumbnail: string;
    brand: string;
    category: string;
  };
}

export const ProductBody = ({ body }: BodyProps) => {
  const { id, title, thumbnail, brand, category } = body;
  return (
    <>
      <Stack>
        <Image
          src={thumbnail}
          alt={title}
          borderRadius="lg"
          w="260px"
          h="200px"
        />
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
        </Stack>
      </Stack>
    </>
  );
};
