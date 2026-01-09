import type { Product } from "../types";
import BrowseCard from "./BrowseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ResultNav from "./ResultNav";

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

      {/* Result navigation (top) */}
      {results.length > resultsPerPage && (
        <ResultNav
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
        />
      )}

      {/* Result list */}
      <ul className="browse-card-list">
        {results
          .slice(page * resultsPerPage, page * resultsPerPage + resultsPerPage)
          .map((result) => (
            <BrowseCard
              product={result}
              handleAddToBasket={handleAddToBasket}
            />
          ))}
      </ul>

      {/* Result navigation (bottom) */}
      {results.length > resultsPerPage && (
        <ResultNav
          page={page}
          setPage={setPage}
          numberOfPages={numberOfPages}
        />
      )}
    </>
  );
}

export default Results;
