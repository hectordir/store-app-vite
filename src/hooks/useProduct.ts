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
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    thumbnail: '',
    brand: '',
    stock: 0,
    category: '',
    discountPercentage: 0,
    rating: 0,
  });
  
  async function fetchProduct(id:number) {
    const productResult = await getProductbyId(id)
    if(product){
      setProduct(productResult)   
    }
  }

  return{product, fetchProduct}
}