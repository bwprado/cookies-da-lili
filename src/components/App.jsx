import '../css/app.css'
import Sidebar from './Sidebar'
import Costumers from '../pages/Costumers'
import Finances from '../pages/Finances'
import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'
import { Routes, Route } from 'react-router-dom'

import { Loading } from './Loading'
// import { useAuth } from '../context/AuthProvider'

const App = () => {
	// const { loading } = useAuth()
	let loading = false
	return (
		<div className="app">
			<Sidebar />
			<div className="app__main">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/costumers" element={<Costumers />} />
					<Route path="/finances" element={<Finances />} />
				</Routes>
			</div>
			{loading && <Loading />}
		</div>
	)
}

export default App
