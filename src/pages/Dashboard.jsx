import Chart from '../components/Chart'
import {
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'


const listHeaderObj = {
	buttons: [
		{
			key: 'new',
			name: 'Under construction',
			icon: faTriangleExclamation,
		},
	],
	headers: ['#', 'DATA', 'CLIENTE', 'DESCRIÇÃO', 'ENTREGA'],
	style: {
		display: 'grid',
		columnGap: '20px',
		gridTemplateColumns: `[num] 30px [date] minmax(80px, 120px) [costumer] minmax(120px, 200px) [description] minmax(150px, 1fr) [delivery] minmax(80px, 100px) [actions] 30px`,
	},
	fieldsToShow: ['num', 'date', 'costumer', 'description', 'delivery'],
	status: 'status',
}

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Chart />
		</div>
	)
}

export default Dashboard
