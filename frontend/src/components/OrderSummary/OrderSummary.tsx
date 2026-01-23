import { useBasket } from "../../context/BasketProvider";
import { useProducts } from "../../context/ProductProvider";
import styles from "./OrderSummary.module.css";

function OrderSummary() {
  const { basket } = useBasket();
  const { products } = useProducts();

  const shippingFee = 6;
  const taxRate = 0.08;

  const subtotal = basket.reduce((previous, current) => {
    const product = products.find((p) => p._id === current.id);

    if (!product) {
      console.error(`Product with ID "${current.id}" not found.`);
      return 0;
    }

    return previous + product.price * current.quantity;
  }, 0);

  const tax = (subtotal + shippingFee) * taxRate;

  return (
    <section className="narrow-section">
      <h2 className="heading">Order Summary</h2>
      <table className={styles.summary}>
        <tbody>
          {basket.map((item) => {
            const product = products.find((p) => p._id === item.id);
            if (!product) {
              console.error(`Product with ID "${item.id}" not found.`);
              return <tr>Product not found</tr>;
            }
            return (
              <tr key={item.id}>
                <th className={styles.header}>{product.name}</th>
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
        </tbody>
      </table>
    </section>
  );
}

export default OrderSummary;
