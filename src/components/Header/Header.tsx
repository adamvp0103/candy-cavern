import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <p>Welcome to</p>
        <h1 className={styles.title}>Candy Cavern</h1>
      </header>
    </>
  );
}

export default Header;
