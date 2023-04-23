import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink, Nav } from './Layout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
