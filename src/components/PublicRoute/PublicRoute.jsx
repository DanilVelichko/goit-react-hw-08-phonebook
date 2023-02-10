import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { state } = useLocation()
	const isAuth = useSelector(selectIsAuthenticated)
	if (isAuth) return <Navigate to={state ? state : '/login'} />
	return children
}

export default PublicRoute
