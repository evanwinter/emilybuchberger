import React from "react"

const ProjectRow = ({ children, margin, heading }) => {
	return (
		<div
			className="ProjectRow"
			style={{ margin: `${margin ? margin : "1rem"} 0` }}
		>
			{heading && <h3 className="project-row-heading">{heading}</h3>}
			{children}
		</div>
	)
}

export default ProjectRow
