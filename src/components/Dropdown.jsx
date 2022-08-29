import React, { useState, useEffect, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../css/dropdown.css'

const DropdownContext = React.createContext()
const DropdownProvider = DropdownContext.Provider

const Dropdown = ({ setStatus }) => {
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState([
		{ label: 'Pedido', value: 'order' },
		{ label: 'Produção', value: 'production' },
		{ label: 'Pronto', value: 'ready' },
		{ label: 'Entregue', value: 'delivered' },
	])
	const [selected, setSelected] = useState(options[0].label)

	const dropdownRef = useRef(null)
	const handleOutsideClick = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick, true)
		return () =>
			document.removeEventListener('mousedown', handleOutsideClick, true)
	}, [])

	return (
		<>
			<div
				ref={dropdownRef}
				className="dropdown"
				onClick={() => setOpen((prevState) => !prevState)}>
				<DropdownProvider
					value={{
						open,
						setOpen,
						options,
						setOptions,
						selected,
						setSelected,
						setStatus,
					}}>
					<DropdownList />
					<DropdownSelected selected={'Select Option'} />
					<DropdownBtn />
				</DropdownProvider>
			</div>
		</>
	)
}

const DropdownList = () => {
	const { open, options, selected, setSelected, setStatus } =
		useContext(DropdownContext)

	const DropdownItem = ({ option }) => (
		<button
			onClick={() => {
				if (option.label === selected) return
				setSelected(option.label)
				setStatus(option.value)
			}}
			className="dropdown__item">
			{option.label}
		</button>
	)

	return (
		<div className={`dropdown__list--${open ? 'active' : 'inactive'}`}>
			{options.map((option, index) => (
				<DropdownItem key={index} option={option} />
			))}
		</div>
	)
}

const DropdownSelected = () => {
	const { selected } = useContext(DropdownContext)
	return <div className="dropdown__selected">{selected}</div>
}

const DropdownBtn = () => {
	const { open } = useContext(DropdownContext)
	return (
		<button className="dropdown__btn">
			<FontAwesomeIcon
				className={`dropdown__btn-arrow--${open ? 'open' : 'close'}`}
				icon={faAngleDown}
			/>
		</button>
	)
}

export default Dropdown
