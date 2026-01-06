import { useContext } from "react";
import CloseIcon from "../icons/CloseIcon";
import ConfirmationIcon from "../icons/ConfirmationIcon";
import { OverlayContext } from "../context/OverlayProvider";

function OrderConfirmation() {
  const overlayContext = useContext(OverlayContext);

  function handleClose() {
    overlayContext.setShowOverlay(false);
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <ConfirmationIcon />
        <h2 className="heading">Order Confirmed!</h2>
        <p>Your order will ship shortly. Have a super sweet day!</p>
        <button className="close-overlay-button" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
