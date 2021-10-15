import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PortfolioTile from "./portfolio-tile"
import { fromContentful } from "../utils"

const PortfolioGrid = () => {
	const data = useStaticQuery(graphql`
		query designsQuery {
			allContentfulPortfolioLandingPage {
				edges {
					node {
						title
						projects {
							... on ContentfulProjectPage {
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
	const [portfolio] = fromContentful(data, "portfolioLandingPage")
	const { projects } = portfolio
	return projects.map((project) => (
		<PortfolioTile project={project} key={project.id} />
	))
}

export default PortfolioGrid
