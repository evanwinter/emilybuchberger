import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"
import ProjectsGrid from "../../components/projects-grid"
import { fromContentful } from "../../utils"

const DesignsPage = ({ data }) => {
	const portfolios = fromContentful(data, "portfolio")
	const { projects } = portfolios[0]

	return (
		<Fragment>
			<Seo
				title="Designs"
				keywords={["emily", "buchberger", "design", "portfolio"]}
			/>
			<section className="portfolio-page">
				<div className="portfolio-wrapper">
					<div className="grid two">
						<ProjectsGrid projects={projects} />
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default DesignsPage

export const query = graphql`
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
`
