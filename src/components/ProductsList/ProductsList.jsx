import '../ProductsList/products-list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

const ProductsList = ({addedItems, setAddedItems, headers}) => {
	return (
		<div className="products__container">
			<ul className="products__header">
				{headers.map((header) => (
					<li key={header} className="products__header__text">
						{header}
					</li>
				))}
			</ul>
			<div className="products__list">
				{addedItems.map((item, index) => (
					<ul key={index} className="products__list__item">
						<li>{item.qtd}</li>
						<li>{item.name}</li>
						<li>{item.size}</li>
						<li>{item.price}</li>
						<li>
							<FontAwesomeIcon
								className="products__list__remove"
								icon={faCircleMinus}
							/>
						</li>
					</ul>
				))}
			</div>
		</div>
	)
}

export default ProductsList
