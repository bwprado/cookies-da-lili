import '../css/add-order.css'
import { useState } from 'react'
import moment from 'moment'
import ProductsList from './ProductsList/ProductsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import SelectSizes from './Inputs/SelectSizes'
import InputCurrency from './Inputs/InputCurrency'
import SelectProducts from './Inputs/SelectProducts'
import InputQtd from './Inputs/InputQtd'
import TabbedContainer from './TabbedContainer/TabbedContainer'
import CostumerInfo from './TabbedContainer/CostumerInfo/CostumerInfo'
import { products } from '../context/fakeData'

const AddOrder = ({ setOpenAddOrder }) => {
	const headers = ['QTD', 'PRODUTO', 'TAM', 'PREÇO']
	const closeModal = () => setOpenAddOrder(false)

	const outsideCloseModal = ({ target }) =>
		target.className.includes('modal__main') && closeModal()

	const addProduct = (e) => {
		e.preventDefault()
		setAddedItems((p) => [
			...p,
			{ qtd: 1, name: 'Added Test', size: 'XL', price: 999 },
		])
	}

	const [dateTime, setDateTime] = useState(null)
	const [order, setOrder] = useState({
		deliveryDate: '',
		deliveryTime: '',
		costumer: '',
		address: '',
		orderList: [],
		custom: '',
		selectedPlateId: '',
	})
	const [sizeOptions, setSizeOptions] = useState('')
	const [basePrice, setBasePrice] = useState(0)
	const [productPrice, setProductPrice] = useState(0)
	const [qtd, setQtd] = useState(1)
	const [selectedProduct, setSelectedProduct] = useState(false)
	const [addedItems, setAddedItems] = useState([
		{ qtd: 1, name: 'Test', size: 'M', price: 100 },
	])
	const updateSizeSelect = (id) => {
		const { sizes, basePrice } = products.find((product) => product.id === id)
		setSizeOptions(sizes)
		setBasePrice(basePrice)
	}
	const updateProductPrice = (value) => console.log('')

	const handleSizeSelection = ({ target: { value } }) =>
		value !== 'default' ? updateProductPrice(value) : ''

	return (
		<div className="modal__main" onClick={outsideCloseModal}>
			<form action="" className="modal__content">
				<div onClick={closeModal} className="btn__close">
					<FontAwesomeIcon
						icon={faXmark}
						style={{ width: '0.8em', height: 'auto', pointerEvents: 'none' }}
					/>
				</div>

				<TabbedContainer>
					<div key="INFORMAÇÕES">
						<CostumerInfo />
					</div>

					<div key="PEDIDO">
						<div className="product-options">
							<div className="input__container">
								<SelectProducts
									label={'QUAL O PRODUTO'}
									className={'content__input select'}
									options={products}
									updateSizeSelect={updateSizeSelect}
									setBasePrice={setBasePrice}
									setProductPrice={setProductPrice}
									qtd={qtd}
								/>
							</div>
							<div className="wrapper">
								<div className="input__container w">
									<InputQtd selectedProduct={selectedProduct} setQtd={setQtd} />
								</div>
								<div className="input__container w">
									<SelectSizes
										label={'TAMANHO'}
										handleSizeSelection={handleSizeSelection}
										setProductPrice={setProductPrice}
										className="content__input"
										selectId={'size'}
										selectName={'size'}
										options={sizeOptions}
										basePrice={basePrice}
									/>
								</div>
								<div className="input__container w">
									<InputCurrency
										label={'PREÇO'}
										defaultValue={productPrice}
										value={productPrice}
									/>
								</div>
							</div>
							<div
								onClick={addProduct}
								className="btn-add-order__container col-1">
								<span className="btn-add-order__label">Adicionar</span>
								<FontAwesomeIcon
									className="btn-add-order__icon"
									icon={faArrowCircleRight}
								/>
							</div>
						</div>
						<div className="input__container">
							<span className="content__label">PERSONALIZAÇÃO</span>
							<input
								type="text"
								placeholder="Descreva as personalizações"
								className="content__input"
							/>
						</div>
						<div className="input__container">
							<span className="content__label">PRATO</span>
							<select
								autoComplete="on"
								name="size"
								id=""
								className="content__input select">
								<option value="default" defaultValue="default">
									Selecione o Prato
								</option>
								<option value="" className="content__input options">
									Prato 1
								</option>
								<option value="" className="content__input options">
									Prato 2
								</option>
								<option value="" className="content__input options">
									Prato 3
								</option>
							</select>
						</div>
						<ProductsList
							addedItems={addedItems}
							setAddedItems={setAddedItems}
							headers={headers}
						/>
					</div>

					<div key="PAGAMENTOS">
						<span>Pagamentos</span>
					</div>
				</TabbedContainer>
			</form>
		</div>
	)
}

export default AddOrder
