import useViewport from '../../hooks/useViewport'
import ListItem from './ListItem'
import './list-container.css'
import NothingToShow from '../NothingToShow'

const ListContainer = ({ anchorRef, listHeaderObj, actions, data }) => {
	const { style, headers, fieldsToShow, status } = listHeaderObj
	const show = useViewport(anchorRef)

	return (
		<div className="list__container">
			<div
				style={style}
				className={`list__container__header ${show ? 'hidden' : ''}`}>
				{headers.map((header, index) => (
					<p
						key={index}
						className={`list__container__header__text ${
							index === 0 ? 'center' : ''
						}`}>
						{header}
					</p>
				))}
			</div>
			{!data.length ? (
				<NothingToShow text={'Nenhum pedido encontrado!'} />
			) : (
				data.map((list, index) => (
					<ListItem
						key={index}
						list={list}
						fieldsToShow={fieldsToShow}
						style={style}
						actions={actions}
						status={status}
					/>
				))
			)}
		</div>
	)
}

export default ListContainer
