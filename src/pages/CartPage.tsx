import Styles from "./styles/CartPage.module.css";
import CartProduct from "./cartProduct";

export default function CartPage() {
  return (
    <div className={Styles.body}>
      <CartProduct />
    </div>
  );
}
