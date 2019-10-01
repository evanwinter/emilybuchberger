import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"

const BopPage = ({ data }) => {
	const [pageData] = data.allContentfulProject.edges.map(edge => edge.node)
	const { images, summary, title, subtitle } = pageData

	const hero = images.find(image => image.title === "BOP-hero")
	const img1 = images.find(image => image.title === "BOP-Website-01")
	const img2 = images.find(image => image.title === "BOP-Website-02")
	const img3 = images.find(image => image.title === "BOP-Website-03")
	const img4 = images.find(image => image.title === "BOP-Website-04")
	const img5 = images.find(image => image.title === "BOP-Website-05")
	const img6 = images.find(image => image.title === "BOP-Website-06")
	const img7 = images.find(image => image.title === "BOP-Website-07")
	const img8 = images.find(image => image.title === "BOP-Website-08")

	return (
		<Fragment>
			<Seo title="Bop" keywords={["TODO"]} />
			<section id="bop">
				<section className="portfolio-page">
					<Img fluid={hero.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>

					<div className="grid three">
						<Img fluid={img1.localFile.childImageSharp.fluid} />
						<Img fluid={img2.localFile.childImageSharp.fluid} />
						<Img fluid={img3.localFile.childImageSharp.fluid} />
					</div>

					<div className="grid three">
						<Img fluid={img4.localFile.childImageSharp.fluid} />
						<Img fluid={img5.localFile.childImageSharp.fluid} />
						<Img fluid={img6.localFile.childImageSharp.fluid} />
					</div>

					<Img fluid={img7.localFile.childImageSharp.fluid} />
					<Img fluid={img8.localFile.childImageSharp.fluid} />
				</section>
			</section>
		</Fragment>
	)
}

export default BopPage

export const query = graphql`
	query bopQuery {
		allContentfulProject(filter: { slug: { eq: "bop" } }) {
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
