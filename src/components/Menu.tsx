import type { ProductInfo } from "../types/types";
import BrowseCard from "./BrowseCard";

interface MenuProps {
  productInfo: ProductInfo;
}

function Menu({ productInfo }: MenuProps) {
  return (
    <section>
      <h2>Menu</h2>
      {productInfo.categories.map((category) => (
        <section key={category}>
          <h3>{category}</h3>
          <ul>
            {productInfo.products
              .filter((product) => product.category === category)
              .map((product) => (
                <li key={product.name}>
                  <BrowseCard product={product} />
                </li>
              ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

export default Menu;
