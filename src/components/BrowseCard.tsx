import type { Product } from "../types";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface BrowseCardProps {
  product: Product;
  handleAddToBasket: (name: string) => void;
}

function BrowseCard({ product, handleAddToBasket }: BrowseCardProps) {
  return (
    <li className="browse-card" key={product.name}>
      <img
        className="card-image"
        src={`/images/${product.image}`}
        alt={product.name}
      />
      <div className="browse-card-body">
        <div className="browse-card-info">
          <h3>{product.name}</h3>
          <span>${product.price.toFixed(2)}</span>
          <p className="browse-card-description">{product.description}</p>
        </div>
        <button
          className="browse-card-button"
          tabIndex={0}
          onClick={() => handleAddToBasket(product.name)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span className="browse-card-button-text">Add to Basket</span>
        </button>
      </div>
    </li>
  );
}

export default BrowseCard;
