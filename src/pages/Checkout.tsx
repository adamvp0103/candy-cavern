import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

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
      <div>
        {/* TODO: Replace with back icon */}
        <Link to="/basket">Back</Link>
      </div>
      <section>
        <h2>Order Summary</h2>
        <ul>
          {basket.map(item => (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <span>x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <h3>Subtotal</h3>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li>
            <h3>Shipping</h3>
            <span>${shippingFee.toFixed(2)}</span>
          </li>
          <li>
            <h3>Tax</h3>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li>
            <h3>Total</h3>
            <span>${(subtotal + shippingFee + tax).toFixed(2)}</span>
          </li>
        </ul>
      </section>
      <section>
        <h2>Billing Information</h2>
        {/* TODO: Implement controlled form */}
        <form>
          <div>
            <label htmlFor="card-number-input">Card Number</label>
            <input
              id="card-number-input"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              required
            />
          </div>
          <div>
            <label htmlFor="security-code-input">Security Code</label>
            <input
              id="security-code-input"
              inputMode="numeric"
              pattern="[0-9]{3}"
              maxLength={3}
              required
            />
          </div>
          <div>
            <label htmlFor="expiration-date-input">Expiration Date</label>
            <input id="expiration-date-input" type="month" required />
          </div>
          <div>
            <label htmlFor="full-name-input">
              Full Name as It Appears on Card
            </label>
            <input id="full-name-input" required />
          </div>
        </form>
      </section>
      <section>
        <h2>Shipping Information</h2>
        {/* TODO: Implement controlled form */}
        <form>
          <div>
            <label htmlFor="email-input">Email</label>
            <input id="email-input" type="email" required />
          </div>
          <div>
            <label htmlFor="address-1-input">Address Line 1</label>
            <input id="address-1-input" required />
          </div>
          <div>
            <label htmlFor="address-2-input">
              Address Line 2 <span>(Optional)</span>
            </label>
            <input id="address-2-input" />
          </div>
          <div>
            <label htmlFor="city-input">City</label>
            <input id="city-input" required />
          </div>
          <div>
            <label htmlFor="state-input">State</label>
            <input id="state-input" required />
          </div>
          <div>
            <label htmlFor="zip-code-input">ZIP Code</label>
            <input
              id="zip-code-input"
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}
              required
            />
          </div>
          <div>
            <label htmlFor="country-input">Country</label>
            <input id="country-input" required />
          </div>
          <div>
            <label htmlFor="instructions-input">
              Special Instructions <span>(Optional)</span>
            </label>
            <textarea id="instructions-input" rows={3} />
          </div>
        </form>
      </section>
      <div>
        {/* TODO: Implement place order */}
        <button>Place Order</button>
      </div>
    </>
  );
}

export default Checkout;
