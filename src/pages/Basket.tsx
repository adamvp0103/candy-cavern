import { Link } from "react-router";
import Header from "../components/Header";
import Nav from "../components/Nav";
import type { BasketItem, Product } from "../types";
import BasketCard from "../components/BasketCard";

interface BasketProps {
  basket: BasketItem[];
  products: Product[];
  handleAddToBasket: (name: string) => void;
  setBasket: (basket: BasketItem[]) => void;
}

function Basket({
  basket,
  products,
  handleAddToBasket,
  setBasket,
}: BasketProps) {
  function removeOne(name: string) {
    const index = basket.findIndex((item) => item.name === name);

    if (index === -1) {
      // Product is not in basket, skip
      return;
    } else if (basket[index].quantity === 1) {
      // Product only has quantity 1, remove from basket entirely
      setBasket(basket.filter((item) => item.name !== name));
    } else {
      // Product has quantity of 2 or more, decrement quantity
      setBasket(
        basket.map((item) =>
          item.name === name ? { name, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function removeAll(name: string) {
    setBasket(basket.filter((item) => item.name !== name));
  }

  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1 className="heading">Basket</h1>

        {/* List of basket items */}
        {basket.length > 0 ? (
          <ul className="basket-card-list">
            {basket.map((item) => (
              <li key={item.name}>
                <BasketCard
                  product={products.find(
                    (product) => product.name === item.name
                  )}
                  quantity={item.quantity}
                  addOne={() => handleAddToBasket(item.name)}
                  removeOne={() => removeOne(item.name)}
                  removeAll={() => removeAll(item.name)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <span className="empty-basket-message">Your basket is empty</span>
        )}

        {/* Basket buttons */}
        {basket.length > 0 && (
          <div className="basket-buttons">
            <button
              className="clear-basket-button"
              onClick={() => setBasket([])}
            >
              Clear Basket
            </button>
            <button className="check-out-button">
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="check-out-button-text">Check Out</div>
              </Link>
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default Basket;
