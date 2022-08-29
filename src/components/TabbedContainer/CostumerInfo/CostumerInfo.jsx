import InputSearch from '../../InputSearch/InputSearch'
import Map from '../../Map/Map'

const CostumerInfo = () => {
	return (
		<>
			<div className="time">
				<div className="input__container col-1">
					<span className="content__label">DATA DA ENTREGA</span>
					<input type="date" className="time__date-picker" />
				</div>
				<div className="input__container col-2">
					<span className="content__label">HORÁRIO DA ENTREGA</span>
					<input type="time" className="time__time-picker" />
				</div>
			</div>
			<div className="input__container">
				<span className="content__label">NOME</span>
				<InputSearch placeholder={'Nome'} className="content__input" />
			</div>
			<div className="time">
				<div className="input__container col-1">
					<span className="content__label">CELULAR</span>
					<input type="text" placeholder="Celular" className="content__input" />
				</div>
				<div className="input__container col-2">
					<span className="content__label">ANIVERSÁRIO</span>
					<input type="date" placeholder="" className="time__time-picker" />
				</div>
			</div>
			<div className="input__container">
				<span className="content__label">ENDEREÇO</span>
				<textarea placeholder="Endereço" className="content__input add" />
			</div>
			<div className="input__container">
				<span className="content__label">MAPA</span>
				<div className="map__container">
					<Map />
				</div>
			</div>
		</>
	)
}

export default CostumerInfo
