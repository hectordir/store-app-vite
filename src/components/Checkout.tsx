import { useCart } from "../state/useCart";
import Styles from "../pages/styles/cartProduct.module.css";
import { useEmail } from "../state/useEmail";

export default function Checkout() {
  const { products, clearCart } = useCart();
  const { value } = useEmail();
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

  const handleCheckout = () => {
    clearCart();
    alert(`Se ha enviado su factura satisfactoriamente a su correo : ${value}`);
  };

  return (
    <div>
      <p>Resumen de Compra</p>
      <div>
        <p>
          Productos ({products.length})
          <span style={{ paddingLeft: "194px" }}>${checkout}</span>
        </p>
      </div>
      <div>
        <p>
          Descuentos{" "}
          <span style={{ paddingLeft: "210px", color: "green" }}>
            $-{descuento}
          </span>
        </p>
      </div>
      <div>
        <p>
          Total <span style={{ paddingLeft: "260px" }}>${total}</span>
        </p>
      </div>
      <button onClick={handleCheckout}>Continuar Compra</button>
      <span>
        <input
          type="email"
          style={{
            width: "100%",
            borderBottom: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            marginTop: "10px",
          }}
          placeholder="Enter your email"
        />
      </span>
      <div>
        {products.length > 0 ? (
          <button onClick={clearCart} className={Styles.button}>
            Limpiar
          </button>
        ) : null}
      </div>
    </div>
  );
}
