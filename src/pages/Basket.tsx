import { Link } from 'react-router';
import Header from '../components/Header';
import { useContext } from 'react';
import BackIcon from '../icons/BackIcon';
import BasketCard from '../components/BasketCard';
import background from '../assets/images/background.png';
import {
  BasketContext,
  BasketDispatchContext
} from '../context/BasketProvider';

function Basket() {
  const basket = useContext(BasketContext);
  const dispatch = useContext(BasketDispatchContext);

  function handleClearBasket() {
    dispatch({
      type: 'cleared'
    });
  }

  return (
    <>
      <img className="background" src={background} />
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
          <span className="empty-basket-message">Your basket is empty.</span>
        )}
      </section>
      {basket.length > 0 && (
        <div className="basket-buttons">
          {/* TODO: Implement clear basket */}
          <button className="clear-basket-button" onClick={handleClearBasket}>
            Clear Basket
          </button>
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
