import { useCart } from "../state/useCart";

export default function CartProduct() {
  const { products, clearCart, handleDeleteCart } = useCart();
  return (
    <div>
      {products.map((item, index) => (
        <div>
          <p key={item.product.id}>{item.product.title}</p>
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
