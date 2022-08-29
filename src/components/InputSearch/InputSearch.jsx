import { ReactComponent as Loading } from '../../imgs/Rolling-1s-200px.svg'
import { useEffect, useState } from 'react'

const InputSearch = ({ placeholder, className }) => {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const [clear, setClear] = useState(false)

	const handleInput = ({ target: { value: v } }) => {
		if (v.length > 0) {
			setTimeout(() => {
				setLoading(true)
				setShowSearch(true)
			}, 200)
		}
		setShowSearch(false)
	}

	useEffect(() => {})

	return (
		<div className="search__container">
			<input
				onChange={handleInput}
				onBlur={() => setShowSearch(false)}
				type="text"
				placeholder={placeholder}
				className={className}
				style={{ position: 'relative', width: '100%' }}
			/>
			{loading && (
				<Loading
					style={{
						width: 20,
						height: 'auto',
						position: 'absolute',
						top: 10,
						right: 10,
					}}
				/>
			)}
			{showSearch && <SearchBox />}
		</div>
	)
}

export default InputSearch

const SearchBox = () => {
	return (
		<div className="search__box">
			<ul className="box__list">
				<li className="list__item">Search result 1</li>
				<li className="list__item">Search result 1</li>
			</ul>
		</div>
	)
}
