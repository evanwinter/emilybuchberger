import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackIcon from "../../assets/icons/back.svg"
import Seo from "../../components/seo"
import FluidImg from "../../components/fluid-img"
import { prepareImages, fromContentful } from "../../utils"

const FreshPicksPage = ({ data }) => {
	const [pageData] = fromContentful(data, 'project')
	const { images, pdf, summary, title, subtitle, heroImage } = pageData
	const heroSrc = heroImage.localFile.publicURL
	const heroTitle = heroImage.title
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Fresh Picks" keywords={["TODO"]} />
			<section id="fresh-picks">
				<section className="portfolio-page">
					<div className="hero">
						<FluidImg src={heroSrc} alt={heroTitle} />
						<section className="text-block intro">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>
					</div>
					<div className="portfolio-wrapper">
						<Img fluid={allImages["project-fp-magazine"].fluid} />
						<Img fluid={allImages["project-fp-packing-slip"].fluid} />
						<div className="grid two-thirds-one-third">
							<Img fluid={allImages["project-fp-print"].fluid} />
							<Img fluid={allImages["project-fp-bag"].fluid} />
						</div>
						<Img fluid={allImages["project-fp-billboard"].fluid} />
						<Img fluid={allImages["project-fp-web"].fluid} />

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
					</div>
				</section>
			</section>
		</Fragment>
	)
}

export default FreshPicksPage

export const query = graphql`
	query freshPicksQuery {
		allContentfulProject(filter: { slug: { eq: "fresh-picks" } }) {
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
						title
						localFile {
							name
							publicURL
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
							publicURL
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
