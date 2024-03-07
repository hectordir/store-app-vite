import { Button } from "@chakra-ui/react";
import { Product } from "../../../interfaces/productos";
import { useCart } from "../../../states/useCart";
import { useEffect } from "react";
import { useProducts } from "../../../hooks/useProduct";

export const ProductDetailsFooter = ({ ...props }: Product) => {
  const { handleAddCart } = useCart();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Button onClick={() => handleAddCart(props)}>Añadir</Button>;
};
