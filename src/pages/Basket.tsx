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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="nav-button">
            <BackIcon />
            <span className="nav-button-text">Products</span>
          </button>
        </Link>
      </div>
      <section className="section">
        <h2 className="heading">Your Basket</h2>
        {basket.length > 0 ? (
          <ul className="basket-card-list">
            {basket.map(item => (
              <BasketCard item={item} />
            ))}
          </ul>
        ) : (
          <span>Your basket is empty.</span>
        )}
      </section>
      {basket.length > 0 && (
        <div className="basket-buttons">
          {/* TODO: Implement clear basket */}
          <button className="clear-basket-button">Clear Basket</button>
          <button className="check-out-button">
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <div className="check-out-button-text">Check Out</div>
            </Link>
          </button>
        </div>
      )}
    </>
  );
}

export default Basket;
