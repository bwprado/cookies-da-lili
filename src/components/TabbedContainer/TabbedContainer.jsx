import { useState } from 'react'
import './tabbed-container.css'

const TabbedContainer = ({ children }) => {
	const [active, setActive] = useState(0)
	const testClick = (id) => setActive(id)

	const TabHeader = ({ children, className, id }) => {
		return (
			<span
				onClick={() => testClick(id)}
				className={className}
				id={children}>
				{children}
			</span>
		)
	}

	const TabContent = ({ children, className }) => {
		return <div className={className}>{children}</div>
	}

	return (
		<div className="tabs">
			<div className="tabs__header">
				{children.map(({ key }, index) => (
					<TabHeader
						key={index}
						id={index}
						className={`tabs__btn${index === active ? '--active' : ''}`}>
						{key}
					</TabHeader>
				))}
			</div>

			<div className="tab__content">
				{children.map((child, index) => (
					<TabContent
						key={index}
						id={index}
						className={`content__child${index === active ? '--active' : ''}`}>
						{child}
					</TabContent>
				))}
			</div>
		</div>
	)
}

export default TabbedContainer
