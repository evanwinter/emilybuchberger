import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Hero } from "../../components/hero"
import ProjectLayout from "../../layouts/project-layout"
import ProjectIntro from "../../components/project-intro"
import ExternalLink from "../../assets/icons/external-link.svg"
import ProjectRow from "../../components/project-row"
import Seo from "../../components/seo"
import { prepareImages, fromContentful } from "../../utils"

const NyxPage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")
	const { images, pdf, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Nyx" keywords={["TODO"]} />
			<ProjectLayout name="nyx">
				<div className="hero">
					<Hero fluid={hero.fluid} />
				</div>
				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow>
					<Img
						fluid={allImages["project-nyx-2"].fluid}
						style={{ maxHeight: "100vh" }}
					/>
				</ProjectRow>

				<ProjectRow>
					<Img
						fluid={allImages["project-nyx-3"].fluid}
						style={{ maxHeight: "100vh" }}
					/>
				</ProjectRow>

				<ProjectRow>
					<Img
						fluid={allImages["project-nyx-4"].fluid}
						style={{ maxHeight: "100vh" }}
					/>
				</ProjectRow>

				<ProjectRow>
					<div className="grid" style={{ marginTop: `1rem` }}>
						<Img fluid={allImages["project-nyx-5"].fluid} />
						<Img fluid={allImages["project-nyx-6"].fluid} />
					</div>
				</ProjectRow>

				<ProjectRow>
					<Img fluid={allImages["project-nyx-7"].fluid} />
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
			</ProjectLayout>
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
