import axios from "axios";
import Styles from "./styles/CartPage.module.css";
import { useEffect, useState } from "react";
import { Producto } from "../interfaces/productos";
import CartProduct from "../components/cartProduct";

export default function CartPage() {
  const [datos, setDatos] = useState<Producto[]>([]);

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
  return (
    <div className={Styles.body}>
      <div className={Styles.body2}>
        <CartProduct />
      </div>
    </div>
  );
}
