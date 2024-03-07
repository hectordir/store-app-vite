import { Button } from "@chakra-ui/react";
import { useCart } from "../../../states/useCart";
import { Product } from "../../../interfaces/productos";

export const ProductFooter = ({ ...props }: Product) => {
  const { handleAddCart } = useCart();

  return (
    <Button
      variant="solid"
      colorScheme="blue"
      width="260px"
      onClick={() => handleAddCart(props)}
    >
      Añadir
    </Button>
  );
};
