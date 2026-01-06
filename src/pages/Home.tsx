import Header from "../components/Header";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Search from "../components/Search";
import type { Product } from "../types/types";

interface HomeProps {
  products: Product[];
  handleAddToBasket: (name: string) => void;
}

function Home({ products, handleAddToBasket }: HomeProps) {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1>Home</h1>
        <Search products={products} handleAddToBasket={handleAddToBasket} />
        <Menu products={products} handleAddToBasket={handleAddToBasket} />
      </main>
    </>
  );
}

export default Home;
