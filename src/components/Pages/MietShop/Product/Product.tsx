import { IProduct } from "../MietShop";
import styles from "./Product.module.css";
import productLogo from "@images/logos/65686.png";

const Product = (props: IProduct) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={productLogo} alt="product" />
      </div>
      <div className={styles.product__description}>
        <div>{props.cost}$</div>
        <div>{props.item}</div>
        <div className={styles.product__description_buy}>
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
