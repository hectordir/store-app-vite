import { Producto } from "../interfaces/productos";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./ProductsList.module.css";
import { NavLink } from "react-router-dom";
import Rating from "./Rating";

export default function ProductsList() {
  const [datos, setDatos] = useState<Producto[]>([]);
  const [count, setCount] = useState(0);

  async function getData() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data;
      const productos = data.products;
      setDatos(productos);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }

  function sumar() {
    setCount(count + 1);
    console.log(count);
  }

  return (
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
            <Rating value={
                Number(producto.rating.toFixed(0))} />
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
            <button onClick={sumar} className="boton">
              Añadir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
