import type { Product } from "../types";
import BrowseCard from "./BrowseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ResultsProps {
  results: Product[];
  handleAddToBasket: (name: string) => void;
}

function Results({ results, handleAddToBasket }: ResultsProps) {
  if (results.length === 0) {
    return <span className="standalone-message">No results</span>;
  }

  const [page, setPage] = useState(0);

  const resultsPerPage = 6;
  const numberOfPages = Math.ceil(results.length / resultsPerPage);

  if (page >= numberOfPages) {
    // Page is now empty due to fewer results, go to the closest populated page
    setPage(numberOfPages - 1);
  }

  return (
    <>
      {/* Result count */}
      <span className="standalone-message">
        {results.length} result{results.length > 1 && "s"}
      </span>

      {/* Result navigation */}
      {results.length > resultsPerPage && (
        <div className="result-nav">
          <button
            className="result-nav-button"
            onClick={() => setPage(page === 0 ? numberOfPages - 1 : page - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <span className="result-nav-text">
            Page {page + 1} of {numberOfPages}
          </span>
          <button
            className="result-nav-button"
            onClick={() => setPage(page === numberOfPages - 1 ? 0 : page + 1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}

      {/* Result list */}
      <ul className="results">
        {results
          .slice(page * resultsPerPage, page * resultsPerPage + resultsPerPage)
          .map((result) => (
            <BrowseCard
              product={result}
              handleAddToBasket={handleAddToBasket}
            />
          ))}
      </ul>
    </>
  );
}

export default Results;
