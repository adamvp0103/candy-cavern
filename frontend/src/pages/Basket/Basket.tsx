import { Link } from 'react-router';
import BasketCard from '../../components/BasketCard/BasketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import styles from './Basket.module.css';
import { useProducts } from '../../context/ProductProvider';
import { useBasket } from '../../context/BasketProvider';

function Basket() {
  const { basket } = useBasket();
  const { products } = useProducts();

  return (
    <>
      <main className="main">
        <h1 className="page-title">Basket</h1>

        <section className="section">
          {/* List of basket items */}
          {basket.length > 0 ? (
            <ul className={styles.list}>
              {basket.map(item => {
                const product = products.find(p => p._id === item.id);

                if (!product) return null;

                return (
                  <li key={item.id}>
                    <BasketCard product={product} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <span className="standalone-message">Your basket is empty</span>
          )}

          {/* Check out button */}
          {basket.length > 0 && (
            <div className="standalone-button-container">
              <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <button className="standalone-button" tabIndex={0}>
                  <FontAwesomeIcon icon={faCashRegister} />
                  <span className="standalone-button-text">Check Out</span>
                </button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Basket;
