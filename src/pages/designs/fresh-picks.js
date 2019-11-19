import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"
import { FluidHero } from "../../components/hero"
import ExternalLink from "../../assets/icons/external-link.svg"
import ProjectRow from "../../components/project-row"
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
				<section className="project-page">
					<div className="hero">
						<FluidHero src={heroSrc} alt={heroTitle} pad={`70%`} />
					</div>
					<div className="project-wrapper">

						<section className="text-block intro">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>

						<ProjectRow>
							<Img fluid={allImages["project-fp-magazine"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-fp-packing-slip"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<div className="grid two-thirds-one-third">
								<Img fluid={allImages["project-fp-print"].fluid} />
								<Img fluid={allImages["project-fp-bag"].fluid} />
							</div>
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-fp-billboard"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-fp-web"].fluid} />
						</ProjectRow>

						<a
							href={pdf.localFile.publicURL}
							className="icon-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							view full brandbook
							<ExternalLink />
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