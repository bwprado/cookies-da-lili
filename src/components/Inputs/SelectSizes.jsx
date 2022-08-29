const SelectSizes = ({
  label,
	selectName,
	selectId,
	options,
	basePrice,
	className,
	setProductPrice,
}) => {
	const handleOptionSelection = ({ target: { value } }) => {
		if (value === 'default') return
		const price = options.find((option) => option.id === value)?.price
		const multi = options.find((option) => option.id === value)?.multiplier
		const productPrice = price ? basePrice + price : basePrice * multi
		setProductPrice(productPrice)
	}
	return (
		<>
			<span className="content__label select">{label}</span>
			<select
				onChange={handleOptionSelection}
				className={className}
				disabled={options.length === 0 ? true : false}
				name={selectName}
				id={selectId}>
				{options.length > 0
					? options.map((option, index) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
					  ))
					: ''}
			</select>
		</>
	)
}

export default SelectSizes
