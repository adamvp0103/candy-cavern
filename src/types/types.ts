export type ProductName =
  | 'Milk Chocolate Bar'
  | 'Dark Chocolate Truffles'
  | 'Chocolate-Covered Almonds'
  | 'Caramel-Filled Squares'
  | 'White Chocolate Bark with Sprinkles'
  | 'Sour Gummy Worms'
  | 'Fruity Gummy Bears'
  | 'Chewy Fruit Slices'
  | 'Rainbow Swirl Lollipops'
  | 'Butterscotch Discs'
  | 'Peppermint Rounds'
  | 'Fruit-Flavored Jolly Drops'
  | 'Chocolate-Covered Pretzels'
  | 'Peanut Butter Candy-Coated Pieces'
  | 'Crispy Rice Chocolate Clusters'
  | 'Soft Chewy Caramels'
  | 'Sea Salt Caramel Squares'
  | 'Chocolate Fudge'
  | 'Peanut Butter Fudge';

export interface Product {
  name: ProductName;
  price: number;
  description: string;
}

export interface Category {
  name: string;
  products: Product[];
}

export interface BasketItem {
  name: ProductName;
  price: number;
  quantity: number;
}