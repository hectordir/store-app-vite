import { create } from "zustand";
import { Producto } from "../interfaces/productos"; // Add missing import statement for "Producto" interface

interface GroupedProducts {
  count: number;
  product: Producto;
}

type Cart = {
  count: number;
  products: GroupedProducts[];
  handleAddCart: (product: Producto) => void;
  handleDeleteCart: (id: number) => void;
  syncCart: (products: GroupedProducts[]) => void;
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
      //se valida que el carrito no este vacio
      if (state.products.length === 0) {
        //En caso de que este vacio se agrega el producto al carrito con una cantidad de 1
        const updatedProducts = [{ count: 1, product }];
        localStorage.setItem("cart", JSON.stringify(updatedProducts));
        return { products: updatedProducts, count: 1 };
      } else {
        //se crea una copia del estado state.products
        const updatedProducts = state.products;
        //validar si el producto ya existe en el carrito buscando su indice
        const productIndex = updatedProducts.findIndex(
          (p) => p.product.id === product.id
        );

        //Si el indice es menor a 0 significa que el producto no existe en el carrito
        if (productIndex < 0) {
          //En este caso se agrega el producto al carro con una cantidad de 1
          updatedProducts.push({ count: 1, product });
        } else {
          //si el producto ya existe en el carrito se aumenta la cantidad
          updatedProducts[productIndex].count += 1;
        }

        //Se actualiza el contador de productos
        let newCount = 0;
        //se recorre el arreglo de productos para sumar la cantidad de cada producto
        updatedProducts.forEach((p) => {
          newCount += p.count;
        });

        //Se actualiza el carrito en el localstorage
        localStorage.setItem("cart", JSON.stringify(updatedProducts));

        //Se retorna el nuevo estado
        return { products: updatedProducts, count: newCount };
      }
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
      console.log(state)
      return { ...state, products, count: newCount };
    });
  },
  clearCart: () => {
    localStorage.setItem("cart", JSON.stringify([]));
    set({ count: 0, products: [] });
  },
}));
