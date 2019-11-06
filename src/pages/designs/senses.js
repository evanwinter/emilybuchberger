import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"
import ProjectRow from "../../components/project-row"
import { Hero } from "../../components/hero"
import { prepareImages, fromContentful } from "../../utils"

const SensesPage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")

	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Senses" keywords={["TODO"]} />
			<section id="senses">
				<section className="project-page">
					<Hero fluid={hero.fluid} />
					<div className="project-wrapper">
						<section className="text-block intro">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>
						<ProjectRow>
							<Img fluid={allImages["project-senses-2"].fluid} />
						</ProjectRow>
						<ProjectRow>
							<Img fluid={allImages["project-senses-3"].fluid} />
						</ProjectRow>
					</div>
				</section>
			</section>
		</Fragment>
	)
}

export default SensesPage

export const query = graphql`
	query sensesQuery {
		allContentfulProject(filter: { slug: { eq: "senses" } }) {
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
