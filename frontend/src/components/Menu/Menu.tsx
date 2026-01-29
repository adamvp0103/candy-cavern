import { useEffect, useState } from 'react';
import type { Category } from '../../types';
import BrowseCard from '../BrowseCard/BrowseCard';
import { useProducts } from '../../context/ProductProvider';

function Menu() {
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoriesError, setCategoriesError] = useState<any>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const { products, productsLoading, productsError } = useProducts();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://candy-cavern.onrender.com/categories',
        );
        const data = await response.json();
        setCategories(
          data.sort(
            (a: Category, b: Category) => a.displayOrder - b.displayOrder,
          ),
        );
      } catch (error) {
        setCategoriesError(error);
        console.error(`Error fetching products: ${error}`);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="section">
      <h2 className="heading">Menu</h2>
      {productsLoading || categoriesLoading ? (
        <span className="standalone-message">Loading...</span>
      ) : productsError || categoriesError ? (
        <span className="standalone-error-message">
          Loading failed. Please try again later!
        </span>
      ) : (
        categories.map(category => (
          <section key={category._id}>
            <h3 className="subheading">{category.name}</h3>
            <ul className="browse-card-list">
              {products
                .filter(product => product.category === category._id)
                .map(product => (
                  <li key={product._id}>
                    <BrowseCard product={product} />
                  </li>
                ))}
            </ul>
          </section>
        ))
      )}
    </section>
  );
}

export default Menu;
