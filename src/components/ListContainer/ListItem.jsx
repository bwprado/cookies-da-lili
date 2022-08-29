import ActionButtons from '../ActionButtons/ActionButtons'
import { getStatus } from '../helpers/helpers'

const currencyOptions = {
	style: 'currency',
	currency: 'BRL',
	maximumFractionDigits: 2,
}

const currency = (num) => num.toLocaleString('pt-BR', currencyOptions)

const ListItem = ({ list, style, actions, fieldsToShow, status }) => {
	const renderItem = () => {
		return Object.keys(list).map((k) => {
			if (!fieldsToShow.includes(k)) return null
			return (
				<p key={k} className={`list__item__text ${k}`}>
					{k.includes('total') ? currency(list[k]) : list[k]}
				</p>
			)
		})
	}
	return (
		<div style={style} className="list__item__container">
			<div className={`list__item__status ${getStatus(list, status)}`} />
			{renderItem(list)}
			<ActionButtons actions={actions} />
		</div>
	)
}

export default ListItem
