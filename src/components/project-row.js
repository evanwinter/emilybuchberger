import React from "react"

const ProjectRow = ({ children, margin }) => {
	return (
		<div
			className="ProjectRow"
			style={{ margin: `${margin ? margin : "1rem"} 0` }}
		>
			{children}
		</div>
	)
}

export default ProjectRow
