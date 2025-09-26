import { useEffect, useState } from 'react';
import './App.css';
import categoryData from './data/categories.json';
import Header from './components/Header';
import { Link } from 'react-router';
import ProductCategorySection from './components/ProductCategorySection';

function App() {
  const [categories, setCategories] = useState<typeof categoryData>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* TODO: Replace with basket icon */}
        <Link to="/basket">Basket</Link>
      </div>
      {categories.map(category => (
        <ProductCategorySection category={category} />
      ))}
    </>
  );
}

export default App;
