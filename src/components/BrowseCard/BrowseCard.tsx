import type { Product } from "../../types";
import styles from "./BrowseCard.module.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface BrowseCardProps {
  product: Product;
  handleAddToBasket: (name: string) => void;
}

function BrowseCard({ product, handleAddToBasket }: BrowseCardProps) {
  return (
    <li className={styles.card} key={product.name}>
      <img
        className={styles.image}
        src={`/images/${product.image}`}
        alt={product.name}
      />
      <div className={styles.body}>
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <span>${product.price.toFixed(2)}</span>
          <p className={styles.description}>{product.description}</p>
        </div>
        <button
          className={styles.button}
          tabIndex={0}
          onClick={() => handleAddToBasket(product.name)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className={styles.buttonText}>Add to Basket</span>
        </button>
      </div>
    </li>
  );
}

export default BrowseCard;
