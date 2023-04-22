import { Link, Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
