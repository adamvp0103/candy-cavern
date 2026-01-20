import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ResultNav.module.css";

interface ResultNavProps {
  page: number;
  setPage: (value: number) => void;
  numberOfPages: number;
}

function ResultNav({ page, setPage, numberOfPages }: ResultNavProps) {
  return (
    <div className={styles.nav}>
      <button
        className={styles.button}
        onClick={() => setPage(page === 0 ? numberOfPages - 1 : page - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span className={styles.text}>
        Page {page + 1} of {numberOfPages}
      </span>
      <button
        className={styles.button}
        onClick={() => setPage(page === numberOfPages - 1 ? 0 : page + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ResultNav;
