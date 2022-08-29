import { useEffect, useState } from 'react'

const InputQtd = ({ setQtd, selectedProduct }) => {
	return (
		<>
			<span className="content__label">QTD</span>
			<input
				disabled={selectedProduct ? true : false}
				onChange={(e) => setQtd(e.target.value)}
				type="number"
				defaultValue={1}
				className="content__input w-sm"
			/>
		</>
	)
}

export default InputQtd
