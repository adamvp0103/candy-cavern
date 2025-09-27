import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import BackIcon from '../icons/BackIcon';
import BasketCard from '../components/BasketCard';

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
      <div className="left-nav-button-container">
        {/* TODO: Replace with back icon */}
        <Link to="/">
          <button className="nav-button">
            <BackIcon />
          </button>
        </Link>
      </div>
      <section className="section">
        <h2>Your Basket</h2>
        {basket.length > 0 ? (
          <ul className="card-list">
            {basket.map(item => (
              <BasketCard item={item} />
            ))}
          </ul>
        ) : (
          <span>Your basket is empty.</span>
        )}
      </section>
      {basket.length > 0 && (
        <div className="adjacent-buttons">
          {/* TODO: Implement clear basket */}
          <button className="minor-button">Clear Basket</button>
          <button className="major-button">
            <Link to="/checkout">Check Out</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default Basket;
