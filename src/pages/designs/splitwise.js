import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import { ThreeColumn } from "../../components/columns"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const SplitwisePage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")
	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Splitwise" keywords={["TODO"]} />
			<ProjectLayout name="splitwise">
				<Hero fluid={hero.fluid} />

				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow>
					<div className="copy left">
						<div>
							<h3>Design Challenges</h3>
							<p>
								Create a new flow that is clearer while keeping relevant information
							</p>
						</div>
					</div>
					<div className="copy left">
						<div>
							<h3>Design Solutions</h3>
							<p>
								Help users add expenses and settle up
							</p>
						</div>
					</div>
				</ProjectRow>

				<ProjectRow full style={{ backgroundColor: `#223322` }}>
					<Img fluid={allImages["splitwise-wireframe"].fluid} />
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto`}}>
					<div className="grid three">
						<div className="grid-item">
							<Img fluid={allImages["splitwise-phone-1"].fluid} />
						</div>
						<div className="grid-item">
							<Img fluid={allImages["splitwise-phone-2"].fluid} />
						</div>
						<div className="grid-item">
							<Img fluid={allImages["splitwise-phone-3"].fluid} />
						</div>
					</div>
				</ProjectRow>
			</ProjectLayout>
		</Fragment>
	)
}

export default SplitwisePage

export const query = graphql`
	query splitwiseQuery {
		allContentfulProject(filter: { slug: { eq: "splitwise" } }) {
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
