import type { Product } from "../../types";
import styles from "./BrowseCard.module.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "../../context/BasketProvider";

interface BrowseCardProps {
  product: Product;
}

function BrowseCard({ product }: BrowseCardProps) {
  const { increment } = useBasket();

  return (
    <div className={styles.card} key={product.name}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <div className={styles.body}>
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <span>${product.price.toFixed(2)}</span>
          <p className={styles.description}>{product.description}</p>
        </div>
        <button
          className={styles.button}
          tabIndex={0}
          onClick={() => increment(product._id)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className={styles.buttonText}>Add to Basket</span>
        </button>
      </div>
    </div>
  );
}

export default BrowseCard;
