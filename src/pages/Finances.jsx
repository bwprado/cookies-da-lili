import { useRef, useState } from 'react'
import ListContainer from '../components/ListContainer/ListContainer'
import {
	faCircleArrowDown,
	faCircleArrowUp,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import { finance } from '../context/fakeData'

/**
 * @typedef {object} listHeaderObj
 * @description It is a config object literal with information about the buttons on the sticky header,
 *  the list header and the style of the list header.
 * @property {array} listHeaderObj.buttons - An array of buttons that goes on the Buttons Header.
 */
const listHeaderObj = {
	buttons: [
		{
			key: 'income',
			name: 'ENTRADA',
			icon: faCircleArrowUp,
		},
		{
			key: 'expense',
			name: 'SAÍDA',
			icon: faCircleArrowDown,
		},
	],
	headers: ['#', 'DATA', 'VALOR', 'DESCRIÇÃO', 'CONTA'],
	style: {
		display: 'grid',
		columnGap: '20px',
		gridTemplateColumns: `[num] minmax(15px, 30px) [date] minmax(80px, 100px) [total] minmax(80px, 100px) [description] minmax(150px, 1fr) [account] minmax(80px, 120px) [actions] 30px`,
	},
	fieldsToShow: ['num', 'date', 'total', 'description', 'toAccount'],
	status: 'total',
}

const actions = [
	{
		label: 'Edit',
		action: 'edit',
		icon: faEllipsisVertical,
	},
]

const Finances = () => {
	const [financeList] = useState(finance)
	const anchorRef = useRef(null)
	return (
		<>
			<div ref={anchorRef} className="anchor">
				anchor
			</div>
			<div className="finances">
				<ListContainer
					anchorRef={anchorRef}
					listHeaderObj={listHeaderObj}
					actions={actions}
					data={financeList}
				/>
			</div>
		</>
	)
}

export default Finances
