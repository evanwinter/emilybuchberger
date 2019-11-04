import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackIcon from "../../assets/icons/back.svg"
import Seo from "../../components/seo"
import { prepareImages, fromContentful } from "../../utils"

const NyxPage = ({ data }) => {
	const [pageData] = fromContentful(data, 'project')
	const { images, pdf, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Nyx" keywords={["TODO"]} />
			<section id="nyx">
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
						<Img fluid={allImages["project-nyx-2"].fluid} />
						<Img fluid={allImages["project-nyx-3"].fluid} />
						<Img fluid={allImages["project-nyx-4"].fluid} />

						<div className="grid" style={{ marginTop: `1rem` }}>
							<Img fluid={allImages["project-nyx-5"].fluid} />
							<Img fluid={allImages["project-nyx-6"].fluid} />
						</div>

						<Img fluid={allImages["project-nyx-7"].fluid} />

						<a
							href={pdf.localFile.publicURL}
							id="brand-guide-button"
							target="_blank"
							rel="noopener noreferrer"
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

export default NyxPage

export const query = graphql`
	query nyxQuery {
		allContentfulProject(filter: { slug: { eq: "nyx" } }) {
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
