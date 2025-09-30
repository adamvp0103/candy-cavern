import { createContext, useReducer, type Dispatch } from 'react';

interface BasketItem {
  name: string;
  price: number;
  quantity: number;
}

type Action =
  | {
      type: 'added';
      payload: {
        name: string;
        price: number;
      };
    }
  | {
      type: 'incremented_quantity';
      payload: {
        name: string;
      };
    }
  | {
      type: 'decremented_quantity';
      payload: {
        name: string;
      };
    }
  | {
      type: 'removed';
      payload: {
        name: string;
      };
    }
  | {
      type: 'cleared';
    };

function basketReducer(basket: BasketItem[], action: Action) {
  switch (action.type) {
    case 'added':
      if (basket.some(item => item.name === action.payload.name)) {
        return basket.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
      }
      return [
        ...basket,
        { name: action.payload.name, price: action.payload.price, quantity: 1 }
      ];
    case 'incremented_quantity':
      const itemToIncrement = basket.find(item => item.name === action.payload.name);

      if (!itemToIncrement) return basket;

      if (itemToIncrement.quantity > 9) {
        return basket.filter(item => item.name !== action.payload.name);
      }
      
      return basket.map(item => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    case 'decremented_quantity':
      const itemToDecrement = basket.find(item => item.name === action.payload.name);

      if (!itemToDecrement) return basket;

      if (itemToDecrement.quantity < 2) {
        return basket.filter(item => item.name !== action.payload.name);
      }

      return basket.map(item => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      });
    case 'removed':
      return basket.filter(item => item.name !== action.payload.name);
    case 'cleared':
      return [];
  }
}

export const BasketContext = createContext<BasketItem[]>([]);
export const BasketDispatchContext = createContext<Dispatch<Action>>(() => {});

interface BasketProviderProps {
  children: React.ReactNode;
}

function BasketProvider({ children }: BasketProviderProps) {
  const [basket, dispatch] = useReducer(basketReducer, []);

  return (
    <BasketContext value={basket}>
      <BasketDispatchContext value={dispatch}>{children}</BasketDispatchContext>
    </BasketContext>
  );
}

export default BasketProvider;
