import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

const BookSeriesPage = ({ data }) => {
	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, summary, title, subtitle } = pageData

	const one = images.find(image => image.localFile.name === "project-book-series-1")
	const two = images.find(image => image.localFile.name === "project-book-series-2")
	const three = images.find(image => image.localFile.name === "project-book-series-3")
	const four = images.find(image => image.localFile.name === "project-book-series-4")
	const five = images.find(image => image.localFile.name === "project-book-series-5")
	const six = images.find(image => image.localFile.name === "project-book-series-6")
	const seven = images.find(image => image.localFile.name === "project-book-series-7")
	const eight = images.find(image => image.localFile.name === "project-book-series-8")

	return (
		<Fragment>
			<SEO title="Book Series" keywords={["TODO"]} />
			<section id="book-series">
				<section className="portfolio-page">
					<Img fluid={one.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>
					<Img fluid={two.localFile.childImageSharp.fluid} />
					<Img fluid={three.localFile.childImageSharp.fluid} />

					<div className="grid" style={{ marginTop: `1rem` }}>
						<Img fluid={four.localFile.childImageSharp.fluid} />
						<Img fluid={five.localFile.childImageSharp.fluid} />
					</div>

					<Img fluid={six.localFile.childImageSharp.fluid} />
					<Img fluid={seven.localFile.childImageSharp.fluid} />
					<Img fluid={eight.localFile.childImageSharp.fluid} />
				</section>
			</section>
		</Fragment>
	)
}

export default BookSeriesPage

export const query = graphql`
	query bookSeriesQuery {
		allContentfulProjects(filter: { slug: { eq: "book-series" } }) {
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
