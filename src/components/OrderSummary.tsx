import { useContext } from 'react';
import { BasketContext } from '../context/BasketProvider';

const shippingFee = 6;
const taxRate = 0.08;

function OrderSummary() {
  const basket = useContext(BasketContext);

  const subtotal = basket.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0
  );
  const tax = (subtotal + shippingFee) * taxRate;

  return (
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
  );
}

export default OrderSummary;
