import '../css/order-list.css'
import { useState } from 'react'

const OrderItem = ({ order }) => {
	const [status, setStatus] = useState('order')
	return (
		<div className="list__main">
			<div className="list__item num">{order.num}</div>
			<div className="list__item date">{order.date}</div>
			<div className="list__item costumer">{order.costumer}</div>
			<div className="list__item description">{order.description}</div>
			<div className="list__item delivery">{order.delivery}</div>
			<div className="list__item actions">ACTIONS</div>
		</div>
	)
}

export default OrderItem
