import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

function OrderConfirmation() {
  return (
    <section>
      <h2>Order Confirmed</h2>
      <p>
        Thanks for shopping at Candy Cavern! You will receive an email shortly
        with details about your order.
      </p>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        <span>Return to Home Page</span>
      </Link>
    </section>
  );
}

export default OrderConfirmation;
