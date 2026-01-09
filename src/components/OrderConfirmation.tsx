import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

function OrderConfirmation() {
  return (
    <section className="narrow-section">
      <h2 className="heading">Order Confirmed</h2>
      <p className="standalone-message">
        Thanks for shopping at Candy Cavern! You will receive an email shortly
        with details about your order.
      </p>
      <div className="standalone-button-container">
        <Link to="/">
          <button className="standalone-button">
            <FontAwesomeIcon icon={faHouse} />
            <span className="standalone-button-text">Return to Home Page</span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default OrderConfirmation;
