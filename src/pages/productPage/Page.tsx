import { useEffect } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { ContentLayout } from "../../components/BasePage";
import { ProductDetailsHeader } from "./components/ProductDetailsHeader";
import { ProductDetailsBody } from "./components/ProductDetailsBody";
import { ProductDetailsFooter } from "./components/ProductDetailsFooter";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { fetchProduct, product } = useProduct();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      fetchProduct(Number(id));
    } else {
      {
        console.log("error fetching");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, thumbnail } = product;

  const headerProps = { title, thumbnail, id };

  return (
    <>
      <ContentLayout>
        <VStack bg="#555555" p="5px 50px 5px">
          <Box color="white">
            <ProductDetailsHeader
              header={{ ...headerProps, id: Number(headerProps.id) }}
            />
            <ProductDetailsBody {...product} />
            <ProductDetailsFooter {...product} />
          </Box>
        </VStack>
      </ContentLayout>
    </>
  );
}
