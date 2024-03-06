import { Stack } from "@chakra-ui/react";
import { Text, Image, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface BodyProps {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
}

const Body = ({ value }: BodyProps) => {
  return (
    <>
      <Stack>
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
      </Stack>
    </>
  );
};
/* 



*/
