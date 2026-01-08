import Header from "../components/Header";
import BillingInformation from "../components/BillingInformation";
import ShippingInformation from "../components/ShippingInformation";
import Nav from "../components/Nav";
import type { BasketItem, Product } from "../types";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";
import OrderConfirmation from "../components/OrderConfirmation";

interface CheckoutProps {
  basket: BasketItem[];
  setBasket: (basket: BasketItem[]) => void;
  products: Product[];
}

function Checkout({ basket, setBasket, products }: CheckoutProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleSubmit() {
    setBasket([]);
    setOrderPlaced(true);
  }

  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1>Checkout</h1>
        {basket.length > 0 ? (
          <>
            <OrderSummary basket={basket} products={products} />
            <section>
              <form onSubmit={handleSubmit}>
                <BillingInformation />
                <ShippingInformation />
                <button className="place-order-button">Place Order</button>
              </form>
            </section>
          </>
        ) : orderPlaced ? (
          <OrderConfirmation />
        ) : (
          <span>Your basket is empty</span>
        )}
      </main>
    </>
  );
}

export default Checkout;
