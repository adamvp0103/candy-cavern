import type { Product } from "../types/types";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface BrowseCardProps {
  product: Product;
  handleAddToBasket: (name: string) => void;
}

function BrowseCard({ product, handleAddToBasket }: BrowseCardProps) {
  const src = `../assets/images/products/${product.image}`;

  return (
    <li className="product-card" key={product.name}>
      <div className="product-card-except-button">
        <img className="product-card-image" src={src} alt={product.name} />
        <div className="product-card-info">
          <div className="product-card-title-and-price">
            <h3>{product.name}</h3>
            <span className="price">${product.price.toFixed(2)}</span>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      <button
        className="product-card-button"
        onClick={() => handleAddToBasket(product.name)}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add to Basket</span>
      </button>
    </li>
  );
}

export default BrowseCard;
