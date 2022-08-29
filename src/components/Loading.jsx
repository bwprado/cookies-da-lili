import loading from '../imgs/Rolling-1s-200px.svg'

export const Loading = () => {
	return (
		<dialog open={true} className="loading">
			<div className="loading__container" style={{ height: '30%' }}>
        <h2>Carregando...</h2>
				<img className='loading__gif' src={loading} alt="" />
			</div>
		</dialog>
	)
}
