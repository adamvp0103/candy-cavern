import { useEffect, useState } from 'react';
import './App.css';
import categoryData from './data/categories.json';
import imageDictionary from './assets/images';

function App() {
  const [categories, setCategories] = useState<typeof categoryData>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <>
      <header>
        <span>Welcome to</span>
        <h1>Candy Cavern</h1>
      </header>
      <div>
        {/* TODO: Replace with basket icon */}
        <button>Basket</button>
      </div>
      {categories.map(category => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.products.map(product => (
              <li key={product.name}>
                {/* TODO: Replace "test" with product.name after configuring image dictionary */}
                {/* TODO: Remove fixed width and height */}
                <img src={imageDictionary["test"]} alt={product.name} width={100} height={100} />
                <h3>{product.name}</h3>
                <span>${product.price.toFixed(2)}</span>
                <p>{product.description}</p>
                {/* TODO: Implement add to basket */}
                <button>Add to Basket</button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export default App;
