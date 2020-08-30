import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
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
			<ProjectLayout name="senses">
				<Hero fluid={hero.fluid} />
				<div className="project-wrapper">
					<ProjectIntro
						title={title}
						subtitle={subtitle}
						summary={summary.summary}
					/>
					<ProjectRow>
						<Img fluid={allImages["project-senses-2"].fluid} />
					</ProjectRow>
					<ProjectRow>
						<Img fluid={allImages["project-senses-3"].fluid} />
					</ProjectRow>
				</div>
			</ProjectLayout>
		</Fragment>
	)
}

export default SensesPage

export const query = graphql`
	query sensesQuery {
		allContentfulProjectPage(filter: { slug: { eq: "senses" } }) {
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
