import React from "react"
import ProjectTile from "./project-tile"

const ProjectsGrid = ({ projects }) => {
	return projects.map((project) => (
		<ProjectTile project={project} key={project.id} />
	))
}

export default ProjectsGrid