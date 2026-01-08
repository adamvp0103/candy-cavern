import type { BasketItem, Product } from "../types";

interface OrderSummaryProps {
  basket: BasketItem[];
  products: Product[];
}

function OrderSummary({ basket, products }: OrderSummaryProps) {
  const shippingFee = 6;
  const taxRate = 0.08;

  const subtotal = basket.reduce((previous, current) => {
    const product = products.find((p) => p.name === current.name);

    if (!product) {
      console.error(`Basket item '${current.name}' not found in products.`);
      return 0;
    }

    return previous + product.price * current.quantity;
  }, 0);

  const tax = (subtotal + shippingFee) * taxRate;

  return (
    <section className="section">
      <h2 className="heading">Order Summary</h2>
      <table className="order-list">
        {basket.map((item) => {
          const product = products.find((p) => p.name === item.name);

          if (!product) {
            console.error(`Basket item '${item.name}' not found in products.`);
            return <tr>Product not found</tr>;
          }

          return (
            <tr className="order-list-item" key={item.name}>
              <th>{item.name}</th>
              <td className="quantity">x{item.quantity}</td>
              <td>${(product.price * item.quantity).toFixed(2)}</td>
            </tr>
          );
        })}
        <tr className="order-list-item">
          <th>Subtotal</th>
          <td>${subtotal.toFixed(2)}</td>
        </tr>
        <tr className="order-list-item">
          <th>Shipping</th>
          <td>${shippingFee.toFixed(2)}</td>
        </tr>
        <tr className="order-list-item">
          <th>Tax</th>
          <td>${tax.toFixed(2)}</td>
        </tr>
        <tr className="order-list-item">
          <th>Total</th>
          <td className="total">
            ${(subtotal + shippingFee + tax).toFixed(2)}
          </td>
        </tr>
      </table>
    </section>
  );
}

export default OrderSummary;
