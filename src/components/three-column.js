import React from "react"

const ThreeColumn = ({ children }) => {
	const [one, two, three] = children
	return (
		<div className="grid three">
			<div className="grid-item">
				{one}
			</div>
			<div className="grid-item">
				{two}
			</div>
			<div className="grid-item">
				{three}
			</div>
		</div>
	)
}

export default ThreeColumn