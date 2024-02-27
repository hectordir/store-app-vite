import { create } from "zustand";
import { Producto } from "../interfaces/productos"; // Add missing import statement for "Producto" interface

type Cart = {
  count: number;
  products: Producto[];
  handleAddCart: (product: Producto) => void;
  handleDeleteCart: (id: number) => void;
  syncCart: (products: Producto[]) => void;
  clearCart: () => void;
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
  handleDeleteCart: (index: number) => {
    set((state) => {
      const deletedProducts = state.products;
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cart && cart.length > 0) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      const newCount = cart.length;
      return { ...state, products: deletedProducts, count: newCount };
    });
  },
  syncCart: (products) => {
    set((state) => {
      const newCount = products.length;
      return { ...state, products, count: newCount };
    });
  },
  clearCart: () => {
    localStorage.setItem("cart", JSON.stringify([]));
    set({ count: 0, products: [] });
  },
}));
