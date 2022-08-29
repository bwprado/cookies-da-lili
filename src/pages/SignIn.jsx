import { Link, useNavigate } from 'react-router-dom'
import logo from '../imgs/cookies-da-lili.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { hp, validateEmail } from '../components/helpers/helpers'

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const emailRef = useRef()
	const passwordRef = useRef()
	// const { user, login } = useAuth()
	const [user, setUser] = useState()

	const handleError = (error) => {
		setError(error)
		setTimeout(() => setError(null), 3000)
	}

	const handleShowPasswordClick = () => setShowPassword((v) => !v)

	const cleanInputs = () => {
		emailRef.current.value = ''
		passwordRef.current.value = ''
	}

	const handleLoginClick = async (e) => {
		let email = emailRef.current.value
		let password = passwordRef.current.value

		if (email === '' || password === '') {
			handleError('Você precisa preencher os campos de Login!')
			cleanInputs()
			return
		}

		if (!validateEmail(email)) {
			handleError('Coloque um email válido!')
			cleanInputs()
			return
		}
		// const error = await login(email, password)

		if (error) {
			handleError('Email/password inválido')
			cleanInputs()
			return
		}
	}

	const handleKeyPress = (e) => (e.key === 'Enter' ? handleLoginClick(e) : '')

	useEffect(() => {
		if (user) navigate('/', { replace: true })
	}, [user, navigate])

	return !user ? (
		<div className="card">
			<img className="card__logo" src={logo} alt="" />
			<h3 className="card__title">
				Para ter acesso você precisar fazer Login!
			</h3>
			<div className="card__container">
				<div className="email">
					<input
						ref={emailRef}
						className="card__input"
						type="text"
						id="email"
						placeholder="Email"
					/>
				</div>
				<div className="password">
					<input
						ref={passwordRef}
						className="card__input"
						type={showPassword ? 'text' : 'password'}
						id="password"
						placeholder="Password"
						onKeyPress={handleKeyPress}
					/>
					<FontAwesomeIcon
						onClick={handleShowPasswordClick}
						className="password__icon"
						icon={faEye}
					/>
				</div>
				<div
					className={`alert__container ${
						error ? 'alert--show' : 'alert--hide'
					}`}>
					{error}
				</div>
			</div>
			<button className="btn btn-login" onClick={handleLoginClick}>
				Login
			</button>
			<Link className="card__link" to="/forgot-password">
				Esqueceu sua senha?
			</Link>
		</div>
	) : null
}

export default SignIn
