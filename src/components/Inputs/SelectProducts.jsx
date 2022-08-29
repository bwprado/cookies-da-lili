const SelectProducts = ({
	label,
	selectName,
	selectId,
	options,
	className,
	setBasePrice,
	updateSizeSelect,
  setProductPrice,
  qtd,
}) => {
	const handleOptionSelection = ({ target: { value } }) => {
		if (value === 'default') return
		const price = options.find((option) => option.id === value)?.basePrice
		updateSizeSelect(value)
		setBasePrice(price)
    setProductPrice(price * qtd)
	}

	return (
		<>
			<span className="content__label select">{label}</span>
			<select
				placeholder="Selecione o Produto"
				onChange={handleOptionSelection}
				className={className}
				name={selectName}
				id={selectId}>
				<option value="default" defaultValue="default">
					Selecione o Produto
				</option>
				{options.length > 0
					? options.map((option) => (
							<option key={option.id} value={option.id}>
								{option.name}
							</option>
					  ))
					: ''}
			</select>
		</>
	)
}

export default SelectProducts
