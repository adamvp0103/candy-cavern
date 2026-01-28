import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Basket from '../pages/Basket/Basket';
import Checkout from '../pages/Checkout';
import BasketProvider from '../context/BasketProvider';
import ProductProvider from '../context/ProductProvider';

function App() {
  return (
    <>
      <ProductProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </ProductProvider>
    </>
  );
}

export default App;
