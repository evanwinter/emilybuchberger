import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"
import { prepareImages, fromContentful } from "../../utils"

const CoalfirePage = ({ data }) => {
	const [pageData] = fromContentful(data, 'project')
	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Coalfire" keywords={["TODO"]} />
			<section id="coalfire">
				<section className="portfolio-page">
					<div className="hero">
						<Img fluid={hero.fluid} />
						<section className="text-block intro">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>
					</div>
					<div className="portfolio-wrapper">
						<Img fluid={allImages["project-coalfire-stamp"].fluid} />
						<Img fluid={allImages["project-coalfire-colorway"].fluid} />
					</div>
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
						title
						localFile {
							name
							childImageSharp {
								fluid(maxWidth: 1440, quality: 90) {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
					heroImage {
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
`