import React from "react"

const TwoColun = ({ children }) => {
	const [one, two] = children
	return (
		<div className="grid two">
			<div className="grid-item">
				{one}
			</div>
			<div className="grid-item">
				{two}
			</div>
		</div>
	)
}

export default TwoColun