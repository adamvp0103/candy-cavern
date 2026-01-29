import type { Product } from '../../types';
import BrowseCard from '../BrowseCard/BrowseCard';
import { useState } from 'react';
import ResultNav from '../ResultNav/ResultNav';

interface ResultsProps {
  results: Product[];
  resultsPerPage: number;
}

function Results({ results, resultsPerPage }: ResultsProps) {
  if (results.length === 0) {
    return <p className="standalone-error-message">No results</p>;
  }

  const [page, setPage] = useState(0);
  const numberOfPages = Math.ceil(results.length / resultsPerPage);

  if (page >= numberOfPages) {
    // Page is now empty due to fewer results, go to the closest populated page
    setPage(numberOfPages - 1);
  }

  return (
    <>
      {/* Result count */}
      <span className="standalone-message">
        {results.length} result{results.length > 1 && 's'}
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
          .map(result => (
            <li key={result._id}>
              <BrowseCard product={result} />
            </li>
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
