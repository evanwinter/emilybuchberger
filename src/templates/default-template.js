import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"


const DefaultTemplate = ({ data, pageContext }) => {
	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, summary, title, subtitle, pdf } = pageData

	return (
		<Fragment>
			<SEO title="Template" keywords={["TODO"]} />
			<section className="template-page">
				<section className="portfolio-page">
					<Img fluid={images[0].localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>

					{images.map((image, index) => {
						if (index > 0) {
							return <Img fluid={image.localFile.childImageSharp.fluid} />
						}
					})}

				</section>
			</section>
		</Fragment>
	)
}
export default DefaultTemplate


/**
 * Gets $slug from pageContext.slug and gets only the Product with that slug.
 */
export const query = graphql`
	query defaultTemplateQuery($slug: String!) {
		allContentfulProjects(filter: { slug: { eq: $slug }}) {
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
