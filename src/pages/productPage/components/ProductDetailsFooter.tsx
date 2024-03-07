import { Button } from "@chakra-ui/react";
import { useCart } from "../../../states/useCart";
import { useEffect } from "react";
import { useProduct } from "../../../hooks/useProduct";

export const ProductDetailsFooter = () => {
  const { handleAddCart } = useCart();
  const { fetchProduct, product } = useProduct();

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button onClick={() => product && handleAddCart(product)}>Añadir</Button>
  );
};
