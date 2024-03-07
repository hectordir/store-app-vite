import { useState } from "react";
import { Product } from "../interfaces/productos";
import { getProducts, getProductbyId } from "../bff-utils";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const productosResult = await getProducts();
    setProducts(productosResult);
  }

  return { products, fetchProducts };
};

export const useProduct = () =>{
  const [product, setProducts] = useState<Product>();
  
  async function fetchProduct(id:string) {
    const productResult = await getProductbyId(id)
    console.log(productResult)
    setProducts(productResult)    
  }

  return{product, fetchProduct}
}