import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import products from "./data/products.json";
import type { BasketItem } from "./types/types";

function App() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  function handleAddToBasket(name: string) {
    const index = basket.findIndex((item) => item.name === name);

    if (index === -1) {
      // Not in basket yet, add new item with quantity 1
      setBasket([...basket, { name, quantity: 1 }]);
    } else {
      // Already in basket, increment quantity
      setBasket(
        basket.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home products={products} handleAddToBasket={handleAddToBasket} />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                basket={basket}
                products={products}
                handleAddToBasket={handleAddToBasket}
                setBasket={setBasket}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                basket={basket}
                setBasket={setBasket}
                products={products}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
