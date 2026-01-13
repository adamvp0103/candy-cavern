import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Product } from "../../types";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./BasketCard.module.css";

interface BasketCardProps {
  product: Product | undefined;
  quantity: number;
  addOne: (product: Product) => void;
  removeOne: (productName: string) => void;
  removeAll: (productName: string) => void;
}

function BasketCard({
  product,
  quantity,
  addOne,
  removeOne,
  removeAll,
}: BasketCardProps) {
  if (!product) {
    console.error(
      "'product' provided as prop to 'BasketCard' instance was not defined."
    );
    return <li className={styles.card}>Product not found</li>;
  }

  const quantityLimit = 10;

  return (
    <li className={styles.card} key={product.name}>
      <img
        className={styles.image}
        src={`/images/${product.image}`}
        alt={product.name}
      />
      <div className={styles.body}>
        <div>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.quantityButtons}>
            <button
              className={styles.quantityButton}
              tabIndex={quantity === 1 ? -1 : 0}
              onClick={() => removeOne(product.name)}
              disabled={quantity === 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button
              className={styles.quantityButton}
              tabIndex={quantity === quantityLimit ? -1 : 0}
              onClick={() => addOne(product)}
              disabled={quantity === quantityLimit}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            className={styles.removeButton}
            tabIndex={0}
            onClick={() => removeAll(product.name)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default BasketCard;
