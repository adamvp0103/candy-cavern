import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
// import OrderSummary from "../components/OrderSummary";
import BillingInformation from "../components/BillingInformation";
import ShippingInformation from "../components/ShippingInformation";

function Checkout() {
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
      <div className="left-nav-button-container">
        <Link to="/basket" style={{ textDecoration: "none" }}>
          <button className="nav-button">
            {/* <BackIcon /> */}
            <span className="nav-button-text">Basket</span>
          </button>
        </Link>
      </div>
      {/* <OrderSummary /> */}
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
  );
}

export default Checkout;
