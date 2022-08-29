import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../ActionButtons/action-buttons.css'

const ActionButtons = ({ actions }) => {

	if (!actions.length) return null
	return (
		<div className="btns__container">
			{actions.map((action, index) => (
				<FontAwesomeIcon onClick={(e) => console.log(e)}key={index} className="btns__btn" icon={action.icon} />
			))}
		</div>
	)
}

export default ActionButtons
