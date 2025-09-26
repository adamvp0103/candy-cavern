import { useEffect, useState } from 'react';
import './App.css';
import categoryData from './data/categories.json';
import Header from './components/Header';
import { Link } from 'react-router';
import ProductCategorySection from './components/ProductCategorySection';
import BasketIcon from './icons/BasketIcon';

function App() {
  const [categories, setCategories] = useState<typeof categoryData>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <>
      <Header />
      <div className="basket-button-container">
        {/* TODO: Replace with basket icon */}
        <Link to="/basket">
          <button className="basket-button">
            <BasketIcon />
          </button>
        </Link>
      </div>
      {categories.map(category => (
        <ProductCategorySection category={category} />
      ))}
    </>
  );
}

export default App;
