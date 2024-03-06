import axios from "axios";
import { Producto } from "../interfaces/productos";

export const discount = (price: number, discountPercentage: number) =>{
    const descuento = price * (discountPercentage / 100);
    return Math.floor(price - descuento).toString();
}


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
export const getProductbyBrand = async (brand: string) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${brand}`);
    const data = res.data;
    const productos: Producto = data.products;
    return productos;
  } catch (error) {
    console.error("Error fetching data", error);
    return {} as Producto;
  }
};

export const getProductbyCategory = async (category: string) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${category}`);
    const data = res.data;
    const productos: Producto = data.products;
    return productos;
  } catch (error) {
    console.error("Error fetching data", error);
    return {} as Producto;
  }
};



