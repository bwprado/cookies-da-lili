import '../css/chart.css'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const options = {
	scaleFontColor: '#6b717f',
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
			labels: {
				font: {
					size: 14,
					family: 'Source Sans Pro',
				},
			},
		},
	},
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
	labels,
	datasets: [
		{
			label: '2022',
			data: [100, 1200, 13123, 2342, 5205, 6123, 1239],
			borderColor: 'rgba(255, 99, 132, 0.9)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
	],
}

const Chart = () => {
	return (
		<div className="chart">
			<span className="chart__title">VENDAS</span>
			<div className="chart__container">
				<Line options={options} data={data} />
			</div>
		</div>
	)
}

export default Chart
