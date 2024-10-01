import { useState } from "react";
import styles from "./MietShop.module.css";
import Product from "./Product/Product";
import productsData from "./database.json";

export interface IProduct {
  item: string | number;
  cost: number;
}

const MietShop = () => {
  const [products, setProducts] = useState<IProduct[]>(productsData.objects);
  const [item, setItem] = useState<string | number>("");
  const [cost, setCost] = useState<number>();
  function handleItem(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setItem(value);
  }

  function handleCost(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setCost(Number(value));
  }

  function addProduct() {
    if (cost !== undefined && item !== undefined) {
      const newProduct: IProduct = {
        cost: cost,
        item: item,
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
          {products.map(({ cost, item }) => {
            return (
              <Product key={cost + String(item)} cost={cost} item={item} />
            );
          })}
        </div>
        <div>Balance : 0$</div>
      </div>
    </div>
  );
};

export default MietShop;
