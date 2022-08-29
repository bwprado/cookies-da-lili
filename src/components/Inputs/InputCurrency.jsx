const InputCurrency = ({ label, value, setProductPrice }) => {
	const numberToCurrency = (number) => {
		const lang = 'pt-BR'
		const currencyOptions = {
			style: 'currency',
			currency: 'BRL',
			maximumFractionDigits: 2,
		}
		return number.toLocaleString(lang, currencyOptions)
	}
	return (
		<>
			<span className="content__label">{label}</span>
			<input
				onChange={(e) => setProductPrice(Number(e.target.value))}
				type="text"
				className="content__input"
				value={numberToCurrency(value)}
			/>
		</>
	)
}

export default InputCurrency
