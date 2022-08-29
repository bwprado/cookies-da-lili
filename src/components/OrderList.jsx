import '../css/order-list.css'
import React, { useContext } from 'react'
import { OrderListContext } from '../context/OrderListContext'
import OrderItem from './OrderItem'
import useViewport from '../hooks/useViewport'

const OrderList = ({ anchorRef }) => {
	const { orderList } = useContext(OrderListContext)
	const show = useViewport(anchorRef)

	return (
		<>
			<div className="list">
				<div className={`header ${show ? 'hidden' : ''}`}>
					<p className="header__text">#</p>
					<p className="header__text">DATA</p>
					<p className="header__text">CLIENTE</p>
					<p className="header__text">DESCRIÇÃO</p>
					<p className="header__text">ENTREGA</p>
					<p className="header__text">ACTIONS</p>
				</div>
				{orderList.map((order) => (
					<OrderItem key={order.num} order={order} />
				))}
			</div>
		</>
	)
}

export default OrderList
