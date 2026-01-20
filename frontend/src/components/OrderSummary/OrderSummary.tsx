import type { BasketItem, Product } from "../../types";
import styles from "./OrderSummary.module.css";

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
    <section className="narrow-section">
      <h2 className="heading">Order Summary</h2>
      <table className={styles.summary}>
        {basket.map((item) => {
          const product = products.find((p) => p.name === item.name);

          if (!product) {
            console.error(`Basket item '${item.name}' not found in products.`);
            return <tr>Product not found</tr>;
          }

          return (
            <tr key={item.name}>
              <th className={styles.header}>{item.name}</th>
              <td>x{item.quantity}</td>
              <td className={styles.price}>
                ${(product.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          );
        })}
        <tr>
          <th className={styles.header}>Subtotal</th>
          <td className={styles.price} colSpan={2}>
            ${subtotal.toFixed(2)}
          </td>
        </tr>
        <tr>
          <th className={styles.header}>Shipping</th>
          <td className={styles.price} colSpan={2}>
            ${shippingFee.toFixed(2)}
          </td>
        </tr>
        <tr>
          <th className={styles.header}>Tax</th>
          <td className={styles.price} colSpan={2}>
            ${tax.toFixed(2)}
          </td>
        </tr>
        <tr>
          <th className={styles.header}>Total</th>
          <td className={styles.total} colSpan={2}>
            ${(subtotal + shippingFee + tax).toFixed(2)}
          </td>
        </tr>
      </table>
    </section>
  );
}

export default OrderSummary;
