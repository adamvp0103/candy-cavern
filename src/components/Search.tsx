import { useState, type ChangeEvent } from "react";
import type { Product } from "../types";
import Results from "./Results";

interface SearchProps {
  products: Product[];
  handleAddToBasket: (name: string) => void;
}

function Search({ products, handleAddToBasket }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    // Update search bar
    setQuery(event.target.value);

    // Update results (ignore non-letter characters and case)
    setResults(
      products.filter((product) =>
        product.name
          .replace(/[^a-zA-Z]/g, "")
          .toLowerCase()
          .includes(event.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase())
      )
    );
  }

  return (
    <section className="section">
      <h2>Search</h2>
      <search>
        <input
          type="search"
          value={query}
          onChange={(event) => handleQueryChange(event)}
        />
      </search>
      {query && (
        <Results results={results} handleAddToBasket={handleAddToBasket} />
      )}
    </section>
  );
}

export default Search;
