import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

const SensesPage = ({ data }) => {
	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, summary, title, subtitle } = pageData

	const one = images.find(image => image.localFile.name === "project-senses-1")
	const two = images.find(image => image.localFile.name === "project-senses-2")
	const three = images.find(
		image => image.localFile.name === "project-senses-3"
	)

	return (
		<Fragment>
			<SEO title="Senses" keywords={["TODO"]} />
			<section id="senses">
				<section className="portfolio-page">
					<Img fluid={two.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>
					<Img fluid={one.localFile.childImageSharp.fluid} />
					<Img fluid={three.localFile.childImageSharp.fluid} />
				</section>
			</section>
		</Fragment>
	)
}

export default SensesPage

export const query = graphql`
	query sensesQuery {
		allContentfulProjects(filter: { slug: { eq: "senses" } }) {
			edges {
				node {
					id
					title
					subtitle
					summary {
						summary
					}
					pdf {
						localFile {
							publicURL
						}
					}
					images {
						localFile {
							name
							childImageSharp {
								fluid(maxWidth: 1440) {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
					coverImage {
						title
						localFile {
							childImageSharp {
								id
							}
						}
					}
				}
			}
		}
	}
`
