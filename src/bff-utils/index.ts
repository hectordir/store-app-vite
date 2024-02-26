import axios from "axios";
import { Producto } from "../interfaces/productos";

export const getProducts = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data;
    const productos: Producto[] = data.products;
    return productos;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const getProductbyId = async (id: number) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = res.data;
    const productos: Producto = data.products;
    return productos;
  } catch (error) {
    console.error("Error fetching data", error);
    return {} as Producto;
  }
};
