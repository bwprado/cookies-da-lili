import { useRef, useState } from 'react'
import {
	faCirclePlus,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import ListContainer from '../components/ListContainer/ListContainer'
import { orders } from '../context/fakeData'
import ButtonHeader from '../components/ButtonHeader'
import { CSSTransition } from 'react-transition-group'
import AddOrder from '../components/AddOrder'

const listHeaderObj = {
	buttons: [
		{
			key: 'new',
			name: 'PEDIDO',
			icon: faCirclePlus,
		},
	],
	headers: ['#', 'DATA', 'CLIENTE', 'DESCRIÇÃO', 'ENTREGA'],
	style: {
		display: 'grid',
		columnGap: '20px',
		gridTemplateColumns: `[num] 30px [date] minmax(80px, 120px) [costumer] minmax(120px, 200px) [description] minmax(150px, 1fr) [delivery] minmax(80px, 100px) [actions] 30px`,
	},
	fieldsToShow: ['num', 'date', 'costumer', 'description', 'delivery'],
	status: 'status',
}

const actions = [
	{
		label: 'Edit',
		action: 'edit',
		icon: faEllipsisVertical,
	},
]

const Orders = () => {
	const [openAddOrder, setOpenAddOrder] = useState(false)
	const [orderList] = useState(orders)
	const anchorRef = useRef(null)

	return (
		<>
			<div className="orders">
				<div ref={anchorRef} className="anchor">
					anchor
				</div>
				<ButtonHeader
					anchorRef={anchorRef}
					setOpenAddOrder={setOpenAddOrder}
					listHeaderObj={listHeaderObj}
				/>
				<ListContainer
					anchorRef={anchorRef}
					listHeaderObj={listHeaderObj}
					actions={actions}
					data={orderList}
				/>
				<CSSTransition
					in={openAddOrder}
					timeout={500}
					classNames="open-add-order"
					unmountOnExit>
					<AddOrder setOpenAddOrder={setOpenAddOrder} />
				</CSSTransition>
			</div>
		</>
	)
}

export default Orders
