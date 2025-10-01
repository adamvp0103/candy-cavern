import { useContext } from 'react';
import imageDictionary from '../assets/images';
import { BasketDispatchContext } from '../context/BasketProvider';
import type { Product, ProductName } from '../types/types';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useContext(BasketDispatchContext);

  function handleAddToBasket(name: ProductName, price: number) {
    dispatch({
      type: 'added',
      payload: { name, price }
    });
  }

  return (
    <li className="product-card" key={product.name}>
      {/* TODO: Replace "test" with product.name after configuring image dictionary */}
      {/* TODO: Remove fixed width and height */}
      <div className="product-card-except-button">
        <img
          className="product-card-image"
          src={imageDictionary[product.name]}
          alt={product.name}
          width={100}
          height={100}
        />
        <div className="product-card-info">
          <div className="product-card-title-and-price">
            <h3>{product.name}</h3>
            <span className="price">${product.price.toFixed(2)}</span>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      {/* TODO: Implement add to basket */}
      <button
        className="product-card-button"
        onClick={() => handleAddToBasket(product.name, product.price)}
      >
        Add to Basket
      </button>
    </li>
  );
}

export default ProductCard;
