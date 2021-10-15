import React from "react"
import OtherProjects from "../components/other-projects"

const ProjectLayout = ({ children, name }) => {
  return (
    <div className="ProjectLayout" id={name}>
      <section className="project-page">{children}</section>
      <OtherProjects />
    </div>
  )
}

export default ProjectLayout
