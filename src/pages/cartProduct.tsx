import Checkout from "../components/Checkout";
import TotalItems from "../components/TotalItems";
import { useCart } from "../state/useCart";
import Styles from "./styles/cartProduct.module.css";
import trash from "../img/trash.png";

export default function CartProduct() {
  const { products, handleDeleteCart } = useCart();
  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }
  return (
    <div className={Styles.body}>
      <div>
        <div className={Styles.checkout}>
          {products.length > 0 ? (
            <div>
              <Checkout />
            </div>
          ) : null}
        </div>
        {products.map((item, index) => (
          <div className={Styles.block}>
            <p className={Styles.Total}>
              <TotalItems />
            </p>
            <div>
              <img
                src={item.product.thumbnail}
                alt={item.product.title}
                className={Styles.img}
              />
            </div>

            <div className={Styles.info}>
              <p>{item.product.title}</p>

              <p>{item.product.brand}</p>

              <del>${item.product.price}</del>
              <p>
                $
                {Math.floor(
                  descuento(
                    item.product.price ?? 0,
                    item.product.discountPercentage ?? 0
                  )
                ).toString()}
              </p>
              <button
                onClick={() => handleDeleteCart(index)}
                className={Styles.button}
              >
                <img src={trash} alt="basura" className={Styles.trash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
