import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const CoalfirePage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")
	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Coalfire" keywords={["TODO"]} />
			<ProjectLayout name="coalfire">
				<Hero fluid={hero.fluid} />

				<div className="project-wrapper">
					<ProjectIntro
						title={title}
						subtitle={subtitle}
						summary={summary.summary}
					/>

					<ProjectRow>
						<Img fluid={allImages["project-coalfire-stamp"].fluid} />
					</ProjectRow>

					<ProjectRow>
						<Img fluid={allImages["project-coalfire-colorway"].fluid} />
					</ProjectRow>
				</div>
			</ProjectLayout>
		</Fragment>
	)
}

export default CoalfirePage

export const query = graphql`
	query coalfireQuery {
		allContentfulProject(filter: { slug: { eq: "coalfire" } }) {
			edges {
				node {
					id
					title
					subtitle
					summary {
						summary
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
