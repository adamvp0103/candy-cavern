import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import imageDictionary from '../assets/images';

// TODO: Replace this placeholder with actual basket implementation
const basketData = [
  {
    name: 'Milk Chocolate Bar',
    price: 2.5,
    quantity: 1
  },
  {
    name: 'Dark Chocolate Truffles',
    price: 6,
    quantity: 2
  },
  {
    name: 'Chocolate-Covered Almonds',
    price: 4.75,
    quantity: 3
  }
];

function Basket() {
  const [basket, setBasket] = useState<typeof basketData>([]);

  useEffect(() => {
    setBasket(basketData);
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* TODO: Replace with back icon */}
        <Link to="/">Back</Link>
      </div>
      <section>
        <h2>Your Basket</h2>
        {basket.length > 0 ? (
          <ul>
            {basket.map(item => (
              <li key={item.name}>
                {/* TODO: Replace "test" with product.name after configuring image dictionary */}
                {/* TODO: Remove fixed width and height */}
                <img
                  src={imageDictionary['test']}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <h3>{item.name}</h3>
                <span>${item.price.toFixed(2)}</span>
                <div>
                  {/* TODO: Implement quantity decrement */}
                  <button>-</button>
                  <span>{item.quantity}</span>
                  {/* TODO: Implement quantity increment */}
                  <button>+</button>
                </div>
                {/* TODO: Implement removal */}
                {/* TODO: Replace with remove icon */}
                <button>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <span>Your basket is empty.</span>
        )}
      </section>
      {basket.length > 0 && (
        <div>
          {/* TODO: Implement clear basket */}
          <button>Clear Basket</button>
          <Link to="/checkout">Check Out</Link>
        </div>
      )}
    </>
  );
}

export default Basket;
