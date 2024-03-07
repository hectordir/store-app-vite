import { Button } from "@chakra-ui/react";
import { useCart } from "../../../states/useCart";
import { Product } from "../../../interfaces/productos";

export const ProductDetailsFooter = (product: Product) => {
  const { handleAddCart } = useCart();

  return <Button onClick={() => handleAddCart(product)}>Añadir</Button>;
};
