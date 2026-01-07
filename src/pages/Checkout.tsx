import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
// import OrderSummary from "../components/OrderSummary";
import BillingInformation from "../components/BillingInformation";
import ShippingInformation from "../components/ShippingInformation";
import Nav from "../components/Nav";
import type { BasketItem, Product } from "../types/types";
import OrderSummary from "../components/OrderSummary";

interface CheckoutProps {
  basket: BasketItem[];
  products: Product[];
}

function Checkout({ basket, products }: CheckoutProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [billingInformationValid, setBillingInformationValid] = useState(false);
  const [shippingInformationValid, setShippingInformationValid] =
    useState(false);

  const navigate = useNavigate();

  function handlePlaceOrder() {
    setFormSubmitted(true);
    if (billingInformationValid && shippingInformationValid) {
      navigate("/");
      setFormSubmitted(false);
    }
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
            <BillingInformation
              formSubmitted={formSubmitted}
              onSetValidity={setBillingInformationValid}
            />
            <ShippingInformation
              formSubmitted={formSubmitted}
              onSetValidity={setShippingInformationValid}
            />
            <div className="place-order-button-container">
              <button className="place-order-button" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </>
        ) : (
          <span>Your basket is empty</span>
        )}
      </main>
    </>
  );
}

export default Checkout;
