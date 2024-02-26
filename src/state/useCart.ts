import { create } from "zustand";
import { Producto } from "../interfaces/productos";

type Cart = {
  count: number;
  products: Producto[];
  handleAddCart: (product: Producto) => void;
  handleDeleteCart: (id: number) => void;
  syncCart: (products: Producto[]) => void;
};

/**
 * Custom hook for managing the cart state.
 */
export const useCart = create<Cart>((set) => ({
  /**
   * The count of products in the cart.
   */
  count: 0,
  /**
   * The array of products in the cart.
   */
  products: [],
  /**
   * Adds a product to the cart.
   */
  handleAddCart: (product) => {
    set((state) => {
      const updatedProducts = state.products;
      updatedProducts.push(product);
      const newCount = updatedProducts.length;
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { ...state, products: updatedProducts, count: newCount };
    });
  },
  /**
   * Deletes a product from the cart.
   */
  handleDeleteCart: (id) => {
    console.log(`se elimino el producto con id ${id}`);
  },
  syncCart: (products) => {
    set((state) => {
      const newCount = products.length;
      return { ...state, products, count: newCount };
    });
  },
}));
