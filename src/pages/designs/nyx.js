import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackIcon from "../../assets/icons/back.svg"
import SEO from "../../components/seo"

const NyxPage = ({ data }) => {
	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, pdf } = pageData

	const one = images.find(image => image.localFile.name === "project-nyx-1")
	const two = images.find(image => image.localFile.name === "project-nyx-2")
	const three = images.find(image => image.localFile.name === "project-nyx-3")
	const four = images.find(image => image.localFile.name === "project-nyx-4")
	const five = images.find(image => image.localFile.name === "project-nyx-5")
	const six = images.find(image => image.localFile.name === "project-nyx-6")
	const seven = images.find(image => image.localFile.name === "project-nyx-7")

	return (
		<Fragment>
			<SEO title="Nyx" keywords={["TODO"]} />
			<section id="nyx">
				<section className="portfolio-page">
					<Img fluid={one.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>Nyx &mdash;</h1>
						<h3>rebrand</h3>
						<p>
							NYX is a major cosmetics line without a clear voice in the
							ever-growing makeup industry. I wanted to give them a fresh look
							and distinct voice that would elevate their brand. Nyx is the name
							for the Greek goddess of the night. In the the rebrand, the logo
							is a symbol for a flower that blooms at night. Ultimately, the
							brand aims to empower people to find themselves through free
							expression.
						</p>
					</section>
					<Img fluid={two.localFile.childImageSharp.fluid} />
					<Img fluid={three.localFile.childImageSharp.fluid} />
					<Img fluid={four.localFile.childImageSharp.fluid} />

					<div className="grid" style={{ marginTop: `1rem` }}>
						<Img fluid={five.localFile.childImageSharp.fluid} />
						<Img fluid={six.localFile.childImageSharp.fluid} />
					</div>

					<Img fluid={seven.localFile.childImageSharp.fluid} />

					<a
						href={pdf.localFile.publicURL}
						id="brand-guide-button"
						target="_blank"
						style={{
							color: `white`,
							display: `inline-block`,
							background: `black`,
							padding: `2rem`,
							textDecoration: `none`,
						}}
					>
						view full brandbook <BackIcon />
					</a>
				</section>
			</section>
		</Fragment>
	)
}

export default NyxPage

export const query = graphql`
	query nyxQuery {
		allContentfulProjects(filter: { slug: { eq: "nyx" } }) {
			edges {
				node {
					id
					title
					subtitle
					pdf {
						localFile {
							publicURL
						}
					}
					images {
						localFile {
							name
							childImageSharp {
								fluid(maxWidth: 2400) {
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
