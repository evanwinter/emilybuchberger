import React from "react"

export const ThreeColumn = ({ children }) => {
	const [one, two, three] = children
	return (
		<div className="grid three">
			<div className="grid-item">{one}</div>
			<div className="grid-item">{two}</div>
			<div className="grid-item">{three}</div>
		</div>
	)
}

export const TwoColumn = ({ children }) => {
	const [one, two] = children
	return (
		<div className="grid two">
			<div className="grid-item">{one}</div>
			<div className="grid-item">{two}</div>
		</div>
	)
}
