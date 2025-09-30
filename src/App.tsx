import { useEffect, useState } from 'react';
import './App.css';
import categoryData from './data/categories.json';
import Header from './components/Header';
import { Link } from 'react-router';
import BasketIcon from './icons/BasketIcon';
import ProductCard from './components/ProductCard';
import background from './assets/images/background.png';

function App() {
  const [categories, setCategories] = useState<typeof categoryData>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <>
      <img className="background" src={background} />
      <Header />
      <div className="right-nav-button-container">
        {/* TODO: Replace with basket icon */}
        <Link to="/basket" style={{ textDecoration: 'none' }}>
          <button className="nav-button">
            <BasketIcon />
            <span className="nav-button-text">Basket</span>
          </button>
        </Link>
      </div>
      {categories.map(category => (
        <section key={category.name} className="section">
          <h2 className="heading">{category.name}</h2>
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
