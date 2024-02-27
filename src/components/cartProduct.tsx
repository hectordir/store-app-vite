import { Producto } from "../interfaces/productos";
import { useCart } from "../state/useCart";

export default function CartProduct() {
  const { products, clearCart, handleDeleteCart } = useCart();
  return (
    <div>
      {products.map((item: Producto, index: number) => (
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
