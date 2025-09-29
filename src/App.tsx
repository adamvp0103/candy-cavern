import { useEffect, useState } from 'react';
import './App.css';
import categoryData from './data/categories.json';
import Header from './components/Header';
import { Link } from 'react-router';
import BasketIcon from './icons/BasketIcon';
import ProductCard from './components/ProductCard';

function App() {
  const [categories, setCategories] = useState<typeof categoryData>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <>
      <Header />
      <div className="right-nav-button-container">
        {/* TODO: Replace with basket icon */}
        <Link to="/basket">
          <button className="nav-button">
            <BasketIcon />
          </button>
        </Link>
      </div>
      {categories.map(category => (
        <section key={category.name} className="section">
          <h2>{category.name}</h2>
          <ul className="product-card-list">
            {category.products.map(product => (
              <ProductCard product={product} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

export default App;
