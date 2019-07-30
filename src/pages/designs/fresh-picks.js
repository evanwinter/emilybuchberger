import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackIcon from "../../assets/icons/back.svg"
import SEO from "../../components/seo"

const FreshPicksPage = ({ data }) => {

	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, pdf } = pageData

	const gif = images.find(image => image.localFile.name === "project-fp-gif")
	const billboard = images.find(image => image.localFile.name === "project-fp-billboard")
	const magazine = images.find(image => image.localFile.name === "project-fp-magazine")
	const print = images.find(image => image.localFile.name === "project-fp-print")
	const web = images.find(image => image.localFile.name === "project-fp-web")
	const businessCards = images.find(image => image.localFile.name === "project-fp-business-cards")
	const packingSlip = images.find(image => image.localFile.name === "project-fp-packing-slip")
	const bag = images.find(image => image.localFile.name === "project-fp-bag")

	return (
		<Fragment>
			<SEO title="Fresh Picks" keywords={["TODO"]} />
			<section id="fresh-picks">
				<section className="portfolio-page">
					<img src={gif.localFile.publicURL} />
					<section className="text-block">
						<h1>Fresh Picks &mdash;</h1>
						<h3>rebrand</h3>
						<p>
							Irv and Shelly's Fresh Picks is a grocery delivery service that
							brings organic, local, and seasonal produce to your door. I created
							a recognizable brand that represents their homegrown qualities and
							freindly disposition. This flexible design system incorporates a
							logo that changes with season just like the product does,
							guaranteeing fresh picks year round.
						</p>
					</section>
					<Img fluid={magazine.localFile.childImageSharp.fluid} />
					<Img fluid={packingSlip.localFile.childImageSharp.fluid} />
					<div className="grid two-thirds-one-third">
						<Img fluid={print.localFile.childImageSharp.fluid} />
						<Img fluid={bag.localFile.childImageSharp.fluid} />
					</div>
					<Img fluid={billboard.localFile.childImageSharp.fluid} />
					<Img fluid={web.localFile.childImageSharp.fluid} />

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

export default FreshPicksPage


export const query = graphql`
	query freshPicksQuery {
		allContentfulProjects(filter: { slug: { eq: "fresh-picks" } }) {
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
							publicURL
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
