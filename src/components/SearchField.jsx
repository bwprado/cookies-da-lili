import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
const SearchField = () => {
	return (
		<form action="" className="sidebar__form">
			<div onClick={toogleClass} className="sidebar__btn">
				<FontAwesomeIcon icon={faMagnifyingGlass} className="sidebar__icon" />
				<span className="sidebar__label">PROCURAR</span>
				<input
					type="text"
					placeholder="Procurar"
					className={`sidebar__input ${search ? '' : 'hidden'}`}
				/>
			</div>
		</form>
	)
}

export default SearchField
