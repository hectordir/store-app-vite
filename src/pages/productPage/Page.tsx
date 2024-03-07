import { useEffect } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { ContentLayout } from "../../components/BasePage";
import { ProductDetailsHeader } from "./components/ProductDetailsHeader";
import { ProductDetailsBody } from "./components/ProductDetailsBody";
import { ProductDetailsFooter } from "./components/ProductDetailsFooter";
import { useProducts } from "../../hooks/useProduct";
import { Product } from "../../interfaces/productos";

export default function ProductsPage(props: Product) {
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    id,
    title,
    thumbnail,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
  } = props;

  const headerProps = { title, thumbnail, id };
  const bodyProps = {
    id,
    title,
    thumbnail,
    brand,
    category,
    description,
    price,
    discountPercentage,
    rating,
  };

  return (
    <>
      <ContentLayout>
        <VStack bg="#555555" p="5px 50px 5px">
          <Box color="white">
            <ProductDetailsHeader header={headerProps} />
            <ProductDetailsBody body={bodyProps} />
            <ProductDetailsFooter {...props} />
          </Box>
        </VStack>
      </ContentLayout>
    </>
  );
}
