import { Producto } from "../interfaces/productos";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";
import { useCart } from "../state/useCart";
import { getProducts } from "../bff-utils";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ProductsList() {
  const [datos, setDatos] = useState<Producto[]>([]);
  const { handleAddCart } = useCart();

  async function getData() {
    const productos = await getProducts();
    setDatos(productos);
  }

  useEffect(() => {
    getData();
  }, []);

  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }

  return (
    <>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={4}
        justifyContent="center"
        backgroundColor="#333333"
        p="10px"
      >
        {datos.map((producto: Producto) => (
          <Card maxW="sm" w="300px" backgroundColor="#555555">
            <CardBody>
              <Image
                src={producto.thumbnail}
                alt={producto.title}
                borderRadius="lg"
                w="260px"
                h="200px"
              />
              <Stack mt="6" spacing="3">
                <Box
                  w="260px"
                  h="140px"
                  bg="white"
                  borderRadius="lg"
                  pl="5px"
                  pt="5px"
                >
                  <Text>{producto.category}</Text>
                  <NavLink to={`/products/${producto.id}`}>
                    <Text>{producto.title}</Text>
                  </NavLink>
                  <Text>{producto.brand}</Text>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" flexWrap="wrap" spacing={4}>
                <Rating value={producto.rating} />
                <Box bg="white" borderRadius="lg" pt="5px" pl="5px">
                  <Text as="del" color="red">
                    Precio: ${producto.price}
                  </Text>
                  <Text fontSize="20px">
                    Precio : $
                    {Math.floor(
                      descuento(producto.price, producto.discountPercentage)
                    ).toString()}
                  </Text>
                </Box>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  width="260px"
                  onClick={() => handleAddCart(producto)}
                >
                  Añadir
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </>
  );
}
/* 
<div className="bg-dark file">
      <div className={Styles.productListContainer}>
        {datos.map((producto: Producto) => (
          <div key={producto.id} className="cartas card">
            <NavLink to={`/products/${producto.id}`}>
              <img src={producto.thumbnail} alt="product" className="imagen" />
            </NavLink>

            <NavLink to={`/products/category/${producto.category}`}>
              <p className="category">{producto.category}</p>
            </NavLink>
            <NavLink to={`/products/${producto.id}`}>
              <h2 className="title">{producto.title}</h2>
            </NavLink>
            <div>
              <Rating value={Number(producto.rating.toFixed(0))} />
            </div>
            <NavLink to={`/products/brand/${producto.brand}`}>
              <h4 className="sub">{producto.brand}</h4>
            </NavLink>
            <div className="body">
              <del style={{ color: "red" }}>Precio : {producto.price}</del>
              <h5>
                Precio :
                {Math.floor(
                  descuento(producto.price, producto.discountPercentage)
                ).toString()}
              </h5>
            </div>
            <button onClick={() => handleAddCart(producto)} className="boton">
              Añadir
            </button>
          </div>
        ))}
      </div>
    </div>
*/
