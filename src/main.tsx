import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Basket from './pages/Basket.tsx';
import Checkout from './pages/Checkout.tsx';
import BasketProvider from './data/BasketProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </BasketProvider>
  </StrictMode>
);
