import { useContext } from 'react';
import imageDictionary from '../assets/images';
import { BasketDispatchContext } from '../data/BasketProvider';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import RemoveIcon from '../icons/RemoveIcon';

interface BasketItem {
  name: string;
  price: number;
  quantity: number;
}

interface BasketCardProps {
  item: BasketItem;
}

function BasketCard({ item }: BasketCardProps) {
  const dispatch = useContext(BasketDispatchContext);

  function handleDecrement(name: string) {
    dispatch({
      type: 'decremented_quantity',
      payload: { name }
    });
  }

  function handleIncrement(name: string) {
    dispatch({
      type: 'incremented_quantity',
      payload: { name }
    });
  }

  function handleRemove(name: string) {
    dispatch({
      type: 'removed',
      payload: { name }
    });
  }

  return (
    <li className="basket-card" key={item.name}>
      {/* TODO: Replace "test" with product.name after configuring image dictionary */}
      {/* TODO: Remove fixed width and height */}
      <img
        className="basket-card-image"
        src={imageDictionary['test']}
        alt={item.name}
        width={100}
        height={100}
      />
      <div className="basket-card-except-image">
        <div className="basket-card-title-and-price">
          <h3>{item.name}</h3>
          <span className="price">${item.price.toFixed(2)}</span>
        </div>
        <div className="basket-card-quantity-and-remove">
          <div className="basket-card-quantity">
            {/* TODO: Implement quantity decrement */}
            <button
              className="quantity-button"
              onClick={() => handleDecrement(item.name)}
              disabled={item.quantity < 2}
            >
              <MinusIcon />
            </button>
            <span className="basket-quantity">{item.quantity}</span>
            {/* TODO: Implement quantity increment */}
            <button
              className="quantity-button"
              onClick={() => handleIncrement(item.name)}
              disabled={item.quantity > 9}
            >
              <PlusIcon />
            </button>
          </div>
          {/* TODO: Implement removal */}
          {/* TODO: Replace with remove icon */}
          <button
            className="remove-button"
            onClick={() => handleRemove(item.name)}
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </li>
  );
}

export default BasketCard;
