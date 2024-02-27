import Styles from "./styles/CartPage.module.css";
import CartProduct from "../components/cartProduct";

export default function CartPage() {
  return (
    <div className={Styles.body}>
      <div className={Styles.body2}>
        <CartProduct />
      </div>
    </div>
  );
}
