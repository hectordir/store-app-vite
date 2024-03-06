import { Card, useColorModeValue } from "@chakra-ui/react";
import { ProductBody } from "./ProductBody";
import { Product } from "../../../interfaces/productos";

export const ProductCard = (props: Product) => {
  const { id, title, thumbnail, brand, category } = props;
  const bodyProps = { id, title, thumbnail, brand, category };
  const cardBg = useColorModeValue("white", "#555555");
  return (
    <Card maxW="sm" backgroundColor={cardBg} boxShadow={"md"}>
      {/* Product Card Header */}
      <ProductBody body={bodyProps} />
      {/* product Card footer */}
    </Card>
  );
};
