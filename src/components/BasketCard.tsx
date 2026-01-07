import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Product } from "../types/types";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

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
    return <li>Product not found</li>;
  }

  const quantityLimit = 10;

  return (
    <li className="basket-card" key={product.name}>
      <img
        className="basket-card-image"
        src={`/images/${product.image}`}
        alt={product.name}
      />
      <div className="basket-card-except-image">
        <div className="basket-card-title-and-price">
          <h3>{product.name}</h3>
          <span className="price">${product.price.toFixed(2)}</span>
        </div>
        <div className="basket-card-quantity-and-remove">
          <div className="basket-card-quantity">
            <button
              className="quantity-button"
              onClick={() => removeOne(product.name)}
              disabled={quantity === 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="basket-quantity">{quantity}</span>
            <button
              className="quantity-button"
              onClick={() => addOne(product)}
              disabled={quantity === quantityLimit}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            className="remove-button"
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
