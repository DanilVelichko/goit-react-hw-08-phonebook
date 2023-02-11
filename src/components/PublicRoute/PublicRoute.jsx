import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate} from 'react-router-dom'

const PublicRoute = ({ children }) => {

	const isAuth = useSelector(selectIsAuthenticated)
	if (isAuth) return <Navigate to={'/login'} />
	return children
}

export default PublicRoute
