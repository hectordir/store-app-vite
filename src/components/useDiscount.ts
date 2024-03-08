import { useCart } from "../states/useCart";

export const useDiscount=()=>{
    const { products,  } = useCart();
    const checkout = Math.floor(
        products.reduce((acc, item) => {
          return acc + item.product.price;
        }, 0)
      );
    
      const descuento = Math.floor(
        products.reduce((acc, item) => {
          return acc + item.product.price * (item.product.discountPercentage / 100);
        }, 0)
      );
    
      const total = Math.floor(checkout - descuento);
      return{total, checkout, descuento}
}
