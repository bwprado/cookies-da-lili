import logo from '../imgs/cookies-da-lili.png'
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faUsers,
	faCircleDollarToSlot,
	faListCheck,
} from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const Sidebar = () => {
	const navigate = useNavigate()
	const { logout } = useAuth()
	const nav = (path) => () => navigate(path)
	const location = useLocation()
	const checkPath = (path) => (path === location.pathname ? true : false)
	const handleLogoutClick = () => logout()

	return (
		<div className="sidebar">
			<img src={logo} alt="Cookies da Lili" className="sidebar__logo" />
			<ul className="sidebar__container">
				<div className="sidebar__btn-div">
					<li
						onClick={nav('/')}
						className={`sidebar__btn ${checkPath('/') ? 'active' : ''}`}>
						<FontAwesomeIcon className="sidebar__icon" icon={faHouse} />
						<span className="sidebar__label">DASHBOARD</span>
					</li>
				</div>
				<div className="sidebar__btn-div">
					<li
						onClick={nav('/orders')}
						className={`sidebar__btn ${checkPath('/orders') ? 'active' : ''}`}>
						<FontAwesomeIcon className="sidebar__icon" icon={faListCheck} />
						<span className="sidebar__label">PEDIDOS</span>
					</li>
				</div>
				<div className="sidebar__btn-div">
					<li
						onClick={nav('/costumers')}
						className={`sidebar__btn ${
							checkPath('/costumers') ? 'active' : ''
						}`}>
						<FontAwesomeIcon className="sidebar__icon" icon={faUsers} />
						<span className="sidebar__label">CLIENTES</span>
					</li>
				</div>
				<div className="sidebar__btn-div">
					<li
						onClick={nav('/finances')}
						className={`sidebar__btn ${
							checkPath('/finances') ? 'active' : ''
						}`}>
						<FontAwesomeIcon
							className="sidebar__icon"
							icon={faCircleDollarToSlot}
						/>
						<span className="sidebar__label">FINANCEIRO</span>
					</li>
				</div>
			</ul>
			<button onClick={handleLogoutClick} className="btn btn-logout">
				Logout
			</button>
		</div>
	)
}

export default Sidebar
