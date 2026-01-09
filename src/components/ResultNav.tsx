import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResultNavProps {
  page: number;
  setPage: (value: number) => void;
  numberOfPages: number;
}

function ResultNav({ page, setPage, numberOfPages }: ResultNavProps) {
  return (
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
  );
}

export default ResultNav;
