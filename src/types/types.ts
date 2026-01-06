export interface Product {
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface ProductInfo {
  categories: string[];
  products: Product[];
}

export interface Category {
  name: string;
  products: Product[];
}

export interface BasketItem {
  name: string;
  price: number;
  quantity: number;
}
