import Checkout from "./components/Checkout";
import TotalItems from "../../components/Total/TotalItems";
import { useCart } from "../../states/useCart";
import Styles from "./components/checkout.module.css";
import trash from "../../img/trash.png";
import { discount } from "../../bff-utils";

export default function CartProduct() {
  const { products, handleDeleteCart } = useCart();

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
                ${discount(item.product.price, item.product.discountPercentage)}
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
