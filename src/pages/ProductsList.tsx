import { Producto } from "../interfaces/productos";
import { useEffect, useState } from "react";
import Styles from "./styles/ProductsList.module.css";
import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";
import { useCart } from "../state/useCart";
import { getProducts } from "../bff-utils";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
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
      {datos.map((producto: Producto) => (
        <Box>
          <Card maxW="sm">
            <CardHeader>
              <Text>{producto.title}</Text>
            </CardHeader>
            <CardBody>
              <Image
                src={producto.thumbnail}
                alt={producto.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3"></Stack>
            </CardBody>
          </Card>
        </Box>
      ))}
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
