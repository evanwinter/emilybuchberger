import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

const CoalfirePage = ({ data }) => {
	const [pageData] = data.allContentfulProject.edges.map(edge => edge.node)
	const { images, summary, title, subtitle } = pageData

	const stampImg = images.find(image => image.localFile.name === "project-coalfire-stamp")
	const menuImgTwo = images.find(image => image.localFile.name === "project-coalfire-menu-2")
	const colorwayImg = images.find(image => image.localFile.name === "project-coalfire-colorway")

	return (
		<Fragment>
			<SEO title="Coalfire" keywords={["TODO"]} />
			<section id="coalfire">
				<section className="portfolio-page">
					<Img fluid={menuImgTwo.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>
					<Img fluid={stampImg.localFile.childImageSharp.fluid} />
					<Img fluid={colorwayImg.localFile.childImageSharp.fluid} />
				</section>
			</section>
		</Fragment>
	)
}

export default CoalfirePage

export const query = graphql`
	query coalfireQuery {
		allContentfulProject(filter: { slug: { eq: "coalfire" } }) {
			edges {
				node {
					id
					title
					subtitle
					summary {
						summary
					}
					images {
						localFile {
							name
							childImageSharp {
								fluid(
									maxWidth: 1440,
									quality: 90
								) {
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
