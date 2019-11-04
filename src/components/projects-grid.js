import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectTile from "./project-tile"
import { fromContentful } from "../utils"

const ProjectsGrid = () => {
	const data = useStaticQuery(graphql`
		query designsQuery {
			allContentfulPortfolio {
				edges {
					node {
						title
						projects {
							... on ContentfulProject {
								id
								slug
								subtitle
								title
								coverImage {
									title
									localFile {
										childImageSharp {
											fluid(maxWidth: 1440, quality: 90) {
												...GatsbyImageSharpFluid_noBase64
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`)
	const portfolios = fromContentful(data, "portfolio")
	const { projects } = portfolios[0]
	return projects.map((project) => (
		<ProjectTile project={project} key={project.id} />
	))
}

export default ProjectsGrid
