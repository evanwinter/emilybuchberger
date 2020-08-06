import React from "react"

const ProjectRow = ({ children, heading, style, full }) => {
  return (
    <div className={`ProjectRow ${full ? "full" : ""}`} style={style}>
      {heading && <h3 className="project-row-heading">{heading}</h3>}
      {children}
    </div>
  )
}

export default ProjectRow
