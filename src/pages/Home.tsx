import Header from "../components/Header";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Search from "../components/Search";
import type { Product, ProductInfo } from "../types/types";

interface HomeProps {
  productInfo: ProductInfo;
}

function Home({ productInfo }: HomeProps) {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <h1>Home</h1>
        <Search products={productInfo.products} />
        <Menu productInfo={productInfo} />
      </main>
    </>
  );
}

export default Home;
