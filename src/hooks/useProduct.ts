import { useState } from "react";
import { Product } from "../interfaces/productos";
import { getProducts } from "../bff-utils";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const productosResult = await getProducts();
    setProducts(productosResult);
  }

  return { products, fetchProducts };
};
