import Header from "../components/Header";
import BillingInformation from "../components/BillingInformation";
import ShippingInformation from "../components/ShippingInformation";
import Nav from "../components/Nav";
import type { BasketItem, Product } from "../types";
import OrderSummary from "../components/OrderSummary";
import { useState } from "react";
import OrderConfirmation from "../components/OrderConfirmation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
      <main className="main">
        <h1 className="narrow-page-title">Checkout</h1>
        {basket.length > 0 ? (
          <>
            <OrderSummary basket={basket} products={products} />
            <section className="narrow-section">
              <form className="form" onSubmit={handleSubmit}>
                <BillingInformation />
                <ShippingInformation />
                <div className="standalone-button-container">
                  <button className="standalone-button" tabIndex={0}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="standalone-button-text">Place Order</span>
                  </button>
                </div>
              </form>
            </section>
          </>
        ) : orderPlaced ? (
          <OrderConfirmation />
        ) : (
          <section className="narrow-section">
            <span className="standalone-message">Your basket is empty</span>
          </section>
        )}
      </main>
    </>
  );
}

export default Checkout;
