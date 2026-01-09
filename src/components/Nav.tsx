import {
  faBasketShopping,
  faCashRegister,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";

function Nav() {
  const location = useLocation();

  const onHomePage = location.pathname === "/";
  const onBasketPage = location.pathname === "/basket";
  const onCheckoutPage = location.pathname === "/checkout";

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            tabIndex={onHomePage ? -1 : 0}
          >
            <div
              className={`nav-link${onHomePage ? " active-nav-link" : ""}`}
              aria-label="Home"
            >
              <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
              <span className="nav-link-text" aria-hidden="true">
                Home
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/basket"
            style={{ textDecoration: "none" }}
            tabIndex={onBasketPage ? -1 : 0}
          >
            <div
              className={`nav-link${onBasketPage ? " active-nav-link" : ""}`}
              aria-label="Basket"
            >
              <FontAwesomeIcon icon={faBasketShopping} aria-hidden="true" />
              <span className="nav-link-text" aria-hidden="true">
                Basket
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/checkout"
            style={{ textDecoration: "none" }}
            tabIndex={onCheckoutPage ? -1 : 0}
          >
            <div
              className={`nav-link${onCheckoutPage ? " active-nav-link" : ""}`}
              aria-label="Checkout"
            >
              <FontAwesomeIcon icon={faCashRegister} aria-hidden="true" />
              <span className="nav-link-text" aria-hidden="true">
                Checkout
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
