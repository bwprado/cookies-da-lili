import ActionButtons from "../ActionButtons/ActionButtons"

const OrderList = ({ list, style, actions }) => {
	const currencyOptions = { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }
	return (
		<div style={style} className="list__item__container">
			<span className="list__item__text center">{list.num}</span>
			<span className="list__item__text">{list.date}</span>
			<span className="list__item__text strong">{list.costumer}</span>
			<span className="list__item__text">{list.description}</span>
			<span className="list__item__text">{list.total.toLocaleString('pt-BR', currencyOptions)}</span>
			<span className="list__item__text">{list.delivery}</span>
			<ActionButtons actions={actions} />
		</div>
	)
}

export default OrderList
