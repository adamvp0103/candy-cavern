import type { Product } from "../types/types";
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
    return <span>No results</span>;
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
      <span>
        {results.length} result{results.length > 1 && "s"}
      </span>

      {/* Page navigation */}
      {results.length > resultsPerPage && (
        <div>
          <button
            onClick={() => setPage(page === 0 ? numberOfPages - 1 : page - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <span>
            Page {page + 1} of {numberOfPages}
          </span>
          <button
            onClick={() => setPage(page === numberOfPages - 1 ? 0 : page + 1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}

      {/* Result list */}
      <ul>
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
