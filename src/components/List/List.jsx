import '../List/list.css'

const List = ({ addedItems, setAddedItems, headers = ['TEST1', 'TESTE2'] }) => {
	return (
		<div className="list__container">
			<div className="list__header">
				<ul className="headers">
					{headers.map((header) => (
						<li key={header} className="headers__text">{header}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default List
