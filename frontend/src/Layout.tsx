import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
