import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectTile = ({ project }) => {
	const { slug, id, coverImage, title, subtitle } = project
	const path = `/designs/${slug}`
	const cover = coverImage.localFile.childImageSharp.fluid
	return (
		<Link to={path} className="project">
			<Img fluid={cover} />
			<div className="project-reveal">
				<div className="project-details">
					<h1 className="title">
						{title} <span className="emdash">&mdash;</span>
					</h1>
					<h3 className="subtitle">{subtitle}</h3>
				</div>
			</div>
		</Link>
	)
}

export default ProjectTile
