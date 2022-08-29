import { useRef, useState } from 'react'
import {
	faCirclePlus,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'

import ListContainer from '../components/ListContainer/ListContainer'
import { costumers } from '../context/fakeData'

/**
 * @typedef {object} listHeaderObj
 * @description It is a config object literal with information about the buttons on the sticky header,
 *  the list header and the style of the list header.
 * @property {array} listHeaderObj.buttons - An array of buttons that goes on the Buttons Header.
 */
const listHeaderObj = {
	buttons: [
		{
			key: 'new',
			name: 'CLIENTE',
			icon: faCirclePlus,
		},
	],
	headers: ['#', 'CLIENTE', 'CELULAR', 'ENDEREÇO', 'TOTAL PAGO'],
	style: {
		display: 'grid',
		columnGap: '20px',
		gridTemplateColumns: `[num] minmax(15px, 30px) [name] minmax(150px, 300px) [cell] minmax(100px, 150px) [address] minmax(200px, 1fr) [total] 80px [actions] 30px`,
	},
	fieldsToShow: ['num', 'name', 'cellphone', 'address', 'totalPaid'],
	status: 'totalPaid',
}

const actions = [
	{
		label: 'Edit',
		action: 'edit',
		icon: faEllipsisVertical,
	},
]

const Costumers = () => {
	const [costumerList] = useState(costumers)
	const anchorRef = useRef(null)
	return (
		<>
			<div className="costumers">
				<div ref={anchorRef} className="anchor">
					anchor
				</div>
				<ListContainer
					anchorRef={anchorRef}
					listHeaderObj={listHeaderObj}
					actions={actions}
					data={costumerList}
				/>
			</div>
		</>
	)
}

export default Costumers
