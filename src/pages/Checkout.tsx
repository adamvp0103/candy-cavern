import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import BackIcon from '../icons/BackIcon';

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

const shippingFee = 6;
const taxRate = 0.08;

function Checkout() {
  const [basket, setBasket] = useState<typeof basketData>([]);

  useEffect(() => {
    setBasket(basketData);
  }, []);

  const subtotal = basket.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0
  );
  const tax = (subtotal + shippingFee) * taxRate;

  return (
    <>
      <Header />
      <div className="left-nav-button-container">
        <Link to="/basket" style={{ textDecoration: 'none' }}>
          <button className="nav-button">
            <BackIcon />
            <span className="nav-button-text">Basket</span>
          </button>
        </Link>
      </div>
      <section className="section">
        <h2 className="heading">Order Summary</h2>
        <ul className="order-list">
          {basket.map(item => (
            <li className="order-list-item" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <span className="quantity">&#x00d7; {item.quantity}</span>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <ul className="total-list">
          <li className="order-list-item">
            <h3>Subtotal</h3>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li className="order-list-item">
            <h3>Shipping</h3>
            <span>${shippingFee.toFixed(2)}</span>
          </li>
          <li className="order-list-item">
            <h3>Tax</h3>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li className="order-list-item">
            <h3>Total</h3>
            <span className="total">
              ${(subtotal + shippingFee + tax).toFixed(2)}
            </span>
          </li>
        </ul>
      </section>
      <section className="section">
        <h2 className="heading">Billing Information</h2>
        {/* TODO: Implement controlled form */}
        <form className="form">
          <div className="input-field">
            <label className="input-label" htmlFor="card-number-input">
              Card Number
            </label>
            <input
              id="card-number-input"
              className="input"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              required
            />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="security-code-input">
              Security Code
            </label>
            <input
              id="security-code-input"
              className="input"
              inputMode="numeric"
              pattern="[0-9]{3}"
              maxLength={3}
              required
            />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="expiration-date-input">
              Expiration Date
            </label>
            <input
              id="expiration-date-input"
              className="input"
              type="month"
              required
            />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="full-name-input">
              Full Name as It Appears on Card
            </label>
            <input id="full-name-input" className="input" required />
          </div>
        </form>
      </section>
      <section className="section">
        <h2 className="heading">Shipping Information</h2>
        {/* TODO: Implement controlled form */}
        <form className="form">
          <div className="input-field">
            <label className="input-label" htmlFor="email-input">
              Email
            </label>
            <input id="email-input" className="input" type="email" required />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="address-1-input">
              Address Line 1
            </label>
            <input id="address-1-input" className="input" required />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="address-2-input">
              Address Line 2 <span className="optional">(Optional)</span>
            </label>
            <input id="address-2-input" className="input" />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="city-input">
              City
            </label>
            <input id="city-input" className="input" required />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="state-input">
              State
            </label>
            <input id="state-input" className="input" required />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="zip-code-input">
              ZIP Code
            </label>
            <input
              id="zip-code-input"
              className="input"
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}
              required
            />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="country-input">
              Country
            </label>
            <input id="country-input" className="input" required />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="instructions-input">
              Special Instructions <span className="optional">(Optional)</span>
            </label>
            <textarea id="instructions-input" className="input" rows={3} />
          </div>
        </form>
      </section>
      <div className="place-order-button-container">
        {/* TODO: Implement place order */}
        <button className="place-order-button">Place Order</button>
      </div>
    </>
  );
}

export default Checkout;
