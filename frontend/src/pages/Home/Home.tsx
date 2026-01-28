import Menu from '../../components/Menu';
import Search from '../../components/Search/Search';
import { useProducts } from '../../context/ProductProvider';

function Home() {
  const { products } = useProducts();

  return (
    <>
      <main className="main">
        <h1 className="page-title">Home</h1>
        <Search products={products} />
        <Menu />
      </main>
    </>
  );
}

export default Home;
