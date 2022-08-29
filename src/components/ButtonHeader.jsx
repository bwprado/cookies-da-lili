import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useViewport from '../hooks/useViewport'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const ButtonHeader = ({ anchorRef, setOpenAddOrder, listHeaderObj }) => {
	const { style, buttons, headers } = listHeaderObj
	const show = useViewport(anchorRef) || null
	const [openSearch, setOpenSearch] = useState(false)
	const [clear, setClear] = useState(false)
	const iptSearchRef = useRef(null)
	const handleModal = () => setOpenAddOrder(true)
	const handleSearch = (e) => {
		if (e.target.id === 'ipt-search') return
		if (!openSearch) {
			setOpenSearch(true)
		} else {
			if (iptSearchRef.current.value) {
				console.log('Performing search!')
			} else {
				setOpenSearch(false)
			}
		}
	}
	const handleChange = ({ target }) =>
		target.value ? setClear(true) : setClear(false)
	const handleClear = () => {
		iptSearchRef.current.value = ''
		setOpenSearch(false)
		setClear(false)
	}

	return (
		<div className="header">
			<div onClick={handleSearch} className="header__btn">
				<FontAwesomeIcon className="header__btn-icon" icon={faSearch} />
				<input
					ref={iptSearchRef}
					type="text"
					name="ipt-search"
					id="ipt-search"
					onChange={handleChange}
					className={`header__ipt${openSearch ? '' : ' hide-search'}`}
				/>
				<button
					onClick={handleClear}
					className={`header__ipt-btn${clear ? '' : ' hide-btn'}`}>
					X
				</button>
			</div>
			{buttons.map((button) => (
				<button key={button.key} className="header__btn" onClick={handleModal}>
					<FontAwesomeIcon className="header__btn-icon" icon={button.icon} />
					<span>{button.name}</span>
				</button>
			))}

			{/* <div
				style={style}
				className={`list__container__header sticky${
					show ? '' : ' hidden-header'
				}`}>
				{headers.map((header, index) => (
					<p
						key={index}
						className={`list__container__header__text ${
							index === 0 ? 'center' : ''
						}`}>
						{header}
					</p>
				))}
			</div> */}
		</div>
	)
}

export default ButtonHeader
