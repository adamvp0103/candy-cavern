import { useState, type ChangeEvent } from 'react';
import type { Product } from '../../types';
import Results from '../Results/Results';
import styles from './Search.module.css';
import { useProducts } from '../../context/ProductProvider';

function Search() {
  const { products } = useProducts();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    // Update search bar
    setQuery(event.target.value);

    // Update results (ignore non-letter characters and case)
    setResults(
      products.filter(product =>
        product.name
          .replace(/[^a-zA-Z]/g, '')
          .toLowerCase()
          .includes(event.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase()),
      ),
    );
  }

  return (
    <section className="section">
      <h2 className="heading">Search</h2>
      <search>
        <input
          className={styles.input}
          type="search"
          value={query}
          placeholder="Enter product name..."
          onChange={event => handleQueryChange(event)}
        />
      </search>
      {query && <Results results={results} resultsPerPage={6} />}
    </section>
  );
}

export default Search;
