import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';

function Home() {
  return (
    <>
      <main className="main">
        <h1 className="page-title">Home</h1>
        <Search />
        <Menu />
      </main>
    </>
  );
}

export default Home;
