import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import OrderConfirmation from "./components/OrderConfirmation";
import productInfo from "./data/product-info.json";

function App() {
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home productInfo={productInfo} />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      {showOrderConfirmation && <OrderConfirmation />}
    </>
  );
}

export default App;
