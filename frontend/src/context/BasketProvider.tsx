import { createContext, useContext, useState, type ReactNode } from "react";
import type { BasketItem } from "../types";

interface BasketContextType {
  basket: BasketItem[];
  setBasket: (value: BasketItem[]) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearProduct: (id: string) => void;
  quantityLimit: number;
}

const BasketContext = createContext<BasketContextType>({
  basket: [],
  setBasket: () => {},
  increment: () => {},
  decrement: () => {},
  clearProduct: () => {},
  quantityLimit: 0,
});

const useBasket = () => useContext(BasketContext);

interface BasketProviderProps {
  children: ReactNode;
}

function BasketProvider({ children }: BasketProviderProps) {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const increment = (id: string) => {
    const index = basket.findIndex((item) => item.id === id);

    if (index === -1) {
      // Not in basket yet, add new item with quantity 1
      setBasket([...basket, { id, quantity: 1 }]);
    } else {
      // Ensure no more than 10 per product
      if (basket[index].quantity < 10) {
        setBasket(
          basket.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        );
      }
    }
  };

  const decrement = (id: string) => {
    const index = basket.findIndex((item) => item.id === id);

    if (index === -1) {
      // Product is not in basket, skip
      return;
    }

    if (basket[index].quantity <= 1) {
      // Product only has quantity 1, remove from basket entirely
      setBasket(basket.filter((item) => item.id !== id));
    } else {
      // Product has quantity of 2 or more, decrement quantity
      setBasket(
        basket.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  };

  const clearProduct = (id: string) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const quantityLimit = 10;

  return (
    <BasketContext
      value={{
        basket,
        setBasket,
        increment,
        decrement,
        clearProduct,
        quantityLimit,
      }}
    >
      {children}
    </BasketContext>
  );
}

export default BasketProvider;
export { useBasket };
