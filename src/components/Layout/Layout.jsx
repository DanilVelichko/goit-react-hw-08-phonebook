import { Outlet } from 'react-router-dom';
// import HeaderList from 'components/HeaderList/HeaderList';
import { Container } from 'components/App.styled';
import ButtonAppBar from 'components/Appbar/Appbar';

const Layout = () => {
  return (
    <Container>
      <ButtonAppBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
