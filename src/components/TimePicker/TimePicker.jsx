import './time-picker.css'
import moment from 'moment'
import { useEffect, useState } from 'react'

const createTime = (start, finish) => {
	let timeList = []
	while (start <= finish) {
		timeList.push(start)
		start++
	}
	return timeList
}

const TimePicker = () => {
	const [open, setOpen] = useState()
	const hours = createTime(0, 24)
	const minutes = createTime(0, 59)
	const hNow = moment().hour()
	const minNow = moment().minute()
	const openDropdown = (e) => setOpen(true)
	const closeDropdown = () => setOpen(false)
	const changeOpenClass = () => `time__dropdown${open ? ' open' : ''}`
	const digitString = (num) =>
		num.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})

	useEffect(() => {
		const hour = document.querySelector('.time__hour.now')
		const min = document.querySelector('.time__min.now')
		hour.scrollIntoView({ block: 'center' })
		min.scrollIntoView({ block: 'center' })
		const dropdown = document.querySelector('#dropdown')
		console.log(dropdown.scrollHeight)
	})

	return (
		<>
			<div className="time">
				<input
					onFocus={openDropdown}
					onBlur={closeDropdown}
					type="text"
					className="time__ipt"
					placeholder="Horário"
				/>
				<div id="dropdown" className={changeOpenClass()}>
					<div className="time__hours">
						{hours.map((hour) => {
							let hs = digitString(hour)
							return (
								<li
									key={hour}
									className={`time__hour ${hour === hNow ? 'now' : ''}`}>
									{hs}
								</li>
							)
						})}
					</div>
					<ul className="time__minutes">
						{minutes.map((min) => {
							let ms = digitString(min)
							return (
								<li
									key={min}
									className={`time__min ${min === minNow ? 'now' : ''}`}>
									{ms}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default TimePicker
