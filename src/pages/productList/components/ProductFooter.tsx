import { Button } from "@chakra-ui/react";
import { useCart } from "../../../states/useCart";
import { useProducts } from "../../../hooks/useProduct";
import { useEffect } from "react";
import { Product } from "../../../interfaces/productos";

export const ProductFooter = ({ ...props }: Product) => {
  const { handleAddCart } = useCart();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
