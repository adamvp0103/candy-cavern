import type { Product } from "../types";
import BrowseCard from "./BrowseCard";

interface MenuProps {
  products: Product[];
  handleAddToBasket: (name: string) => void;
}

function Menu({ products, handleAddToBasket }: MenuProps) {
  const categories: string[] = [];

  for (const product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }

  return (
    <section className="section">
      <h2>Menu</h2>
      {categories.map((category) => (
        <section key={category}>
          <h3>{category}</h3>
          <ul>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <li key={product.name}>
                  <BrowseCard
                    product={product}
                    handleAddToBasket={handleAddToBasket}
                  />
                </li>
              ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

export default Menu;
