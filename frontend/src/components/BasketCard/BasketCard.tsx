import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './BasketCard.module.css';
import { useBasket } from '../../context/BasketProvider';
import type { Product } from '../../types';

interface BasketCardProps {
  product: Product;
}

function BasketCard({ product }: BasketCardProps) {
  const { basket, increment, decrement, clearProduct, quantityLimit } =
    useBasket();

  const quantity = basket.find(item => item.id === product._id)?.quantity ?? 0;

  return (
    <div className={styles.card} key={product.name}>
      <img className={styles.image} src={product.image} alt={product.name} />
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
              onClick={() => decrement(product._id)}
              disabled={quantity === 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button
              className={styles.quantityButton}
              tabIndex={quantity === quantityLimit ? -1 : 0}
              onClick={() => increment(product._id)}
              disabled={quantity === quantityLimit}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            className={styles.removeButton}
            tabIndex={0}
            onClick={() => clearProduct(product._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
