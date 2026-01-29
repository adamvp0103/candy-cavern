import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../../pages/Home/Home';
import Basket from '../../pages/Basket/Basket';
import Checkout from '../../pages/Checkout/Checkout';
import BasketProvider from '../../context/BasketProvider';
import ProductProvider from '../../context/ProductProvider';
import Layout from '../../Layout';

function App() {
  return (
    <>
      <ProductProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="basket" element={<Basket />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </ProductProvider>
    </>
  );
}

export default App;
