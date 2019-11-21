import React from "react"

const ProjectIntro = ({ title, subtitle, summary }) => {
	return (
		<div className="ProjectIntro">
			<h1 className="heading">{title} &mdash;</h1>
			<h3 className="subheading">{subtitle}</h3>
			<p>{summary}</p>
		</div>
	)
}

export default ProjectIntro
