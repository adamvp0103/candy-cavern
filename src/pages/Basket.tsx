import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import BasketItem from '../components/BasketItem';

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
              <BasketItem item={item} />
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
