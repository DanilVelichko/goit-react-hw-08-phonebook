import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const isAuth = useSelector(selectIsAuthenticated);

  if (!isAuth) return <Navigate to={'/login'} state={pathname} />;
  return children;
};

export default PrivateRoute;
