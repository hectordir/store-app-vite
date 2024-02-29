import { useState } from "react";
import Styles from "./Totalitems.module.css";
import { useCart } from "../state/useCart";
export default function TotalItems() {
  const [number, setnumber] = useState<number>(1);
  const { handleAddCart, products } = useCart();

  const plus = () => {
    setnumber((prevNumber) => prevNumber + 1);
    const item = {
      count: number,
      producto: products,
    };
    console.log(item);
    products.map((item) => {
      handleAddCart(item.product);
      console.log(item);
    });
  };
  const minus = () => {
    if (number > 1) {
      setnumber((prevNumber) => prevNumber - 1);
      const item = {
        count: number,
        producto: products,
      };
      console.log(item);
      products.map((item) => {
        handleAddCart(item.product);
        console.log(item);
      });
    } else {
      setnumber(1);
    }
  };

  return (
    <div style={{ float: "right" }}>
      <div className={Styles.body}>
        <button onClick={minus}>-</button>
        <span className={Styles.sp}>{number}</span>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
}
