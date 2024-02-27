import { Producto } from "../interfaces/productos";
import { useCart } from "../state/useCart";

export default function CartProduct() {
  const { clearCart, handleDeleteCart } = useCart();

  const array = JSON.parse(localStorage.getItem("cart") ?? "");
  if (array) {
    array.forEach((item: Producto) => {
      console.log(item);
    });
  }

  return (
    <div>
      {array.map((item: Producto, index: number) => (
        <div>
          <p key={item.id}>{item.title}</p>
          <button onClick={() => handleDeleteCart(index)}>Eliminar</button>
        </div>
      ))}
      <div>
        <button onClick={clearCart} style={{ marginTop: "20px" }}>
          Limpiar
        </button>
      </div>
    </div>
  );
}
