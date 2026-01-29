export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  displayOrder: number;
}

export interface BasketItem {
  id: string;
  quantity: number;
}
