import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Producto } from "../interfaces/productos";
import Styles from "./styles/ProductPage.module.css";
import Rating from "../components/Rating";
import StarRating from "../components/StarRating";

export default function ProductsPage() {
  const { id, brand, category } = useParams<{
    id: string;
    brand: string;
    category: string;
  }>();
  const [datos, setDatos] = useState<Producto | null>(null);

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
    <div className={Styles.body}>
      <div className={Styles.body2}>
        <div className={Styles.id}>
          <p>Producto Numero : #{id}</p>
        </div>

        <div style={{ color: "white" }}>
          <img src={datos?.thumbnail} alt="Iphone 9" className={Styles.image} />
          <p className={Styles.title}>{datos?.title}</p>
          <p>Descripcion : {datos?.description}</p>
          <p>Marca : {datos?.brand}</p>
          <p>Categoria : {datos?.category}</p>
          <div>
            <StarRating rating={Number(datos?.rating.toFixed(0))}/>
            <Rating value={
                Number(datos?.rating.toFixed(0))} />
          </div>
          <del>Precio : {datos?.price}</del>
          <p>
            Precio con descuento :{" "}
            {Math.floor(
              descuento(datos?.price ?? 0, datos?.discountPercentage ?? 0)
            ).toString()}
          </p>
          <button className={Styles.button}>Añadir</button>
        </div>
      </div>
    </div>
  );
}
