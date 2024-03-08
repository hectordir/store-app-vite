import { useState } from "react";
import { useCart } from "../../../../states/useCart";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
export default function ItemsList() {
  const [number, setnumber] = useState<number>(1);
  const { handleAddCart, products } = useCart();

  const plus = () => {
    setnumber((prevNumber) => prevNumber + 1);
    products.map((item) => {
      handleAddCart(item.product);
    });
  };
  const minus = () => {
    if (number > 1) {
      setnumber((prevNumber) => prevNumber - 1);
      products.map((item) => {
        handleAddCart(item.product);
      });
    } else {
      setnumber(1);
    }
  };

  return (
    <Box>
      <HStack>
        <Button onClick={minus}>-</Button>
        <Text>{number}</Text>
        <Button onClick={plus}>+</Button>
      </HStack>
    </Box>
  );
}
