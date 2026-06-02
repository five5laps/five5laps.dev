import { useState } from "react";
import type { IProduct } from "@entities/product";
import { productsDatabase } from "@entities/product";
import styles from "./MietShopPage.module.css";
import Product from "./Product/Product";

const MietShopPage = () => {
  const [products, setProducts] = useState<IProduct[]>(productsDatabase.objects);
  const [item, setItem] = useState<string | number>("");
  const [cost, setCost] = useState<number>();

  function handleItem(e: React.FormEvent<HTMLInputElement>) {
    setItem(e.currentTarget.value);
  }

  function handleCost(e: React.FormEvent<HTMLInputElement>) {
    setCost(Number(e.currentTarget.value));
  }

  function addProduct() {
    if (cost !== undefined && item !== undefined) {
      const newProduct: IProduct = {
        cost,
        item,
      };
      setProducts((prev) => [...prev, newProduct]);
      setItem("");
      setCost(0);
    }
  }

  return (
    <div className={styles.mietShop}>
      <div className={styles.mietShop__AddForm}>
        <div>
          Item : <input value={item} onChange={handleItem} type="text" />
        </div>
        <div>
          Cost : <input value={cost} onChange={handleCost} type="number" />
        </div>
        <button onClick={addProduct}>Add product</button>
        <div className={styles.mietShop__products}>
          {products.map(({ cost, item }) => (
            <Product key={cost + String(item)} cost={cost} item={item} />
          ))}
        </div>
        <div>Balance : 0$</div>
      </div>
    </div>
  );
};

export default MietShopPage;
