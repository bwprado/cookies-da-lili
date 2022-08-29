import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from '../context/AuthProvider'

const ProtectedRoute = () => {
	let user = true
	return user ? <Outlet /> : <Navigate to="/sign-in" replace />
}

export default ProtectedRoute
