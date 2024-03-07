import { Card, useColorModeValue } from "@chakra-ui/react";
import { ProductBody } from "./ProductBody";
import { Product } from "../../../interfaces/productos";
import { ProductHeader } from "./ProductHeader";
import { ProductFooter } from "./ProductFooter";

export const ProductCard = (props: Product) => {
  const {
    id,
    title,
    thumbnail,
    brand,
    category,
    price,
    discountPercentage,
    rating,
  } = props;

  const headerProps = { title, thumbnail };
  const bodyProps = {
    id,
    title,
    thumbnail,
    brand,
    category,
    price,
    discountPercentage,
    rating,
  };

  const cardBg = useColorModeValue("white", "#555555");

  return (
    <Card maxW="sm" backgroundColor={cardBg} boxShadow={"md"}>
      <ProductHeader header={headerProps} />
      <ProductBody body={bodyProps} />
      <ProductFooter {...props} />
    </Card>
  );
};
