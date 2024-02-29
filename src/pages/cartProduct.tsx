import { useCart } from "../state/useCart";
import Styles from "./styles/cartProduct.module.css";

export default function CartProduct() {
  const { products, clearCart, handleDeleteCart } = useCart();
  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }

  return (
    <div className={Styles.body}>
      <div>
        {products.map((item, index) => (
          <div>
            <div>
              <img
                src={item.product.thumbnail}
                alt={item.product.title}
                className={Styles.img}
              />
            </div>
            <div className={Styles.info}>
              <p>{item.product.title}</p>
              <p>Marca : {item.product.brand}</p>

              <del>Precio : {item.product.price}</del>
              <p>
                Precio con descuento :{" "}
                {Math.floor(
                  descuento(
                    item.product.price ?? 0,
                    item.product.discountPercentage ?? 0
                  )
                ).toString()}
              </p>
              <button onClick={() => handleDeleteCart(index)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearCart} style={{ marginTop: "20px" }}>
        Limpiar
      </button>
    </div>
  );
}
