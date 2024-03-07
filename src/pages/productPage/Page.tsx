import { useEffect } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { ContentLayout } from "../../components/BasePage";
import { ProductDetailsHeader } from "./components/ProductDetailsHeader";
import { ProductDetailsBody } from "./components/ProductDetailsBody";
import { ProductDetailsFooter } from "./components/ProductDetailsFooter";
import { useProduct } from "../../hooks/useProduct";
import { Product } from "../../interfaces/productos";
import { useParams } from "react-router-dom";

export default function ProductsPage(props: Product) {
  const { fetchProduct } = useProduct();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    } else {
      {
        console.log("error fetching");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
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
            <ProductDetailsHeader
              header={{ ...headerProps, id: Number(headerProps.id) }}
            />
            <ProductDetailsBody {...bodyProps} />
            <ProductDetailsFooter />
          </Box>
        </VStack>
      </ContentLayout>
    </>
  );
}
/*
const { id, brand, category } = useParams<{
  id: string;
  brand: string;
  category: string;
}>();
*/
