import {
  faBasketShopping,
  faCashRegister,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/basket">
            <FontAwesomeIcon icon={faBasketShopping} />
            <span>Basket</span>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <FontAwesomeIcon icon={faCashRegister} />
            <span>Checkout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
