import {
  Box,
  Container,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCart } from "../../../states/useCart";

export default function CheckoutSummary() {
  const { products } = useCart();
  return (
    <Box>
      <Stack>
        {products.map((item) => (
          <Container>
            <VStack>
              <HStack>
                <Box w="200px" h="auto">
                  <Image src={item.product.thumbnail} borderRadius="20px" />
                </Box>
                <Select placeholder="Cantidad" w="150px">
                  <option value="option1">01</option>
                  <option value="option1">02</option>
                  <option value="option1">03</option>
                </Select>
                <Box>
                  <Text>${item.product.price}</Text>
                </Box>
              </HStack>
            </VStack>
          </Container>
        ))}
      </Stack>
    </Box>
  );
}
