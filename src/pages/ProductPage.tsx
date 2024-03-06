import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Producto } from "../interfaces/productos";
import Rating from "../components/Rating";
import { useCart } from "../state/useCart";
import { Box, VStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { ContentLayout } from "../components/BasePage";

export default function ProductsPage() {
  const { id, brand, category } = useParams<{
    id: string;
    brand: string;
    category: string;
  }>();
  const [datos, setDatos] = useState<Producto | null>(null);

  const { handleAddCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        const url = category
          ? `https://dummyjson.com/products/category/${category}`
          : `https://dummyjson.com/products/${id}`;
        const res = await axios.get(url);
        const data = res.data;
        if (brand) {
          const formatedData = data.filter(
            (product: Producto) => product.brand === brand
          );
          setDatos(formatedData);
        } else {
          setDatos(data);
        }

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }

  return (
    <>
      <ContentLayout>
        <VStack bg="#555555" p="5px 50px 5px">
          <Text>Producto Numero : #{id}</Text>
          <Box color="white">
            <Image src={datos?.thumbnail} alt="Iphone 9" />
            <Text>{datos?.title}</Text>
            <Text>Descripcion : {datos?.description}</Text>
            <Text>Marca : {datos?.brand}</Text>
            <Text>Categoria : {datos?.category}</Text>
            <Box>
              <Rating value={Number(datos?.rating.toFixed(0))} />
            </Box>
            <Text as="del">Precio : {datos?.price}</Text>
            <Text>
              Precio con descuento :{" "}
              {Math.floor(
                descuento(datos?.price ?? 0, datos?.discountPercentage ?? 0)
              ).toString()}
            </Text>
            <Button onClick={() => datos && handleAddCart(datos)}>
              Añadir
            </Button>
          </Box>
        </VStack>
      </ContentLayout>
    </>
  );
}
