import { useContext } from "react";
import imageDictionary from "../assets/images";
import { BasketDispatchContext } from "../context/BasketProvider";
import type { Product } from "../types/types";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps {
  product: Product;
}

function BrowseCard({ product }: ProductCardProps) {
  const dispatch = useContext(BasketDispatchContext);

  function handleAddToBasket(name: string, price: number) {
    dispatch({
      type: "added",
      payload: { name, price },
    });
  }

  return (
    <li className="product-card" key={product.name}>
      <div className="product-card-except-button">
        <img
          className="product-card-image"
          src={imageDictionary[product.name]}
          alt={product.name}
        />
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
        onClick={() => handleAddToBasket(product.name, product.price)}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add to Basket</span>
      </button>
    </li>
  );
}

export default BrowseCard;
