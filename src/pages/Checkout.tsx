import { Link, useNavigate } from 'react-router';
import Header from '../components/Header';
import { useContext, useState } from 'react';
import BackIcon from '../icons/BackIcon';
import background from '../assets/images/background.png';
import OrderSummary from '../components/OrderSummary';
import BillingInformation from '../components/BillingInformation';
import ShippingInformation from '../components/ShippingInformation';
import { BasketDispatchContext } from '../context/BasketProvider';
import { OverlayContext } from '../context/OverlayProvider';

function Checkout() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [billingInformationValid, setBillingInformationValid] = useState(false);
  const [shippingInformationValid, setShippingInformationValid] =
    useState(false);

  const navigate = useNavigate();

  const dispatch = useContext(BasketDispatchContext);
  const overlayContext = useContext(OverlayContext);

  function handlePlaceOrder() {
    setFormSubmitted(true);
    if (billingInformationValid && shippingInformationValid) {
      dispatch({ type: 'cleared' });
      overlayContext.setShowOverlay(true);
      navigate('/');
      setFormSubmitted(false);
    }
  }

  return (
    <>
      <img className="background" src={background} />
      <Header />
      <div className="left-nav-button-container">
        <Link to="/basket" style={{ textDecoration: 'none' }}>
          <button className="nav-button">
            <BackIcon />
            <span className="nav-button-text">Basket</span>
          </button>
        </Link>
      </div>
      <OrderSummary />
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
