import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Hero } from "../../components/hero"
import Video from "../../components/video"
import ProjectLayout from "../../layouts/project-layout"
import ProjectIntro from "../../components/project-intro"
import Seo from "../../components/seo"
import FluidImg from "../../components/fluid-img"
import { TwoColumn, ThreeColumn } from "../../components/columns"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const BopPage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")

	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const media = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Bop" keywords={["TODO"]} />
			<ProjectLayout name="bop">
				<Hero fluid={hero.fluid} />
				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow style={{margin: `0rem auto 5rem auto`}} heading={"User Interviews"}>
					<ThreeColumn>
						<div className="card">
							<Img fluid={media["BOP-graph-1"].fluid} />
						</div>
						<div className="card">
							<Img fluid={media["BOP-graph-2"].fluid} />
						</div>
						<div className="card">
							<Img fluid={media["BOP-graph-3"].fluid} />
						</div>
					</ThreeColumn>
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}} heading={"User Personas"}>
					<ThreeColumn>
						<div className="card">
							<Img fluid={media["BOP-persona-1"].fluid} />
						</div>
						<div className="card">
							<Img fluid={media["BOP-persona-2"].fluid} />
						</div>
						<div className="card">
							<Img fluid={media["BOP-persona-3"].fluid} />
						</div>
					</ThreeColumn>
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}}>
					<Img
						fluid={media["BOP-styleguide"].fluid}
						style={{ maxHeight: "100vh" }}
					/>
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}}>
					<Video src={media["bop-prototype"].src} />
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}}>
					<TwoColumn>
						<Img
							fluid={media["BOP-zoom-nowplaying"].fluid}
							style={{ maxHeight: "70vh" }}
							imgStyle={{ objectFit: "contain" }}
						/>
						<div className="copy">
							<div className="content-wrapper">
								<h3>User Problems:</h3>
								<p>
									It’s difficult for everyone to contribute to music in group
									settings.
								</p>
								<p>
									When you hear a song you like it takes multiple steps to
									find out what it is and then add it to your library.
								</p>
								<h3>Solutions:</h3>
								<p>
									Everyone is able to add their music to the party through an
									easy to use interface.
								</p>
								<p>
									When you hear a song you enjoy, you can open the app to see
									what’s playing. Once you favorite that song it automatically
									adds it to your song library.
								</p>
							</div>
						</div>
					</TwoColumn>
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}}>
					<TwoColumn>
						<div className="copy">
							<div className="content-wrapper">
								<h3>User Feedback:</h3>
								<p>
									“It’d be cool to save/log everything that was played during
									a specific event into a playlist”
								</p>
								<p>not easy to hear a song and add it to music</p>
								<h3>Solutions:</h3>
								<p>Go to your history to relive the night</p>
							</div>
						</div>
						<FluidImg
							pad={"131%"}
							fit={"contain"}
							style={{ maxHeight: "70vh" }}
							src={media["BOP-playlist"].fluid}
							alt={media["BOP-playlist"].title}
						/>
					</TwoColumn>
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto 5rem auto`}}>
					<Img fluid={media["BOP-flow"].fluid} />
				</ProjectRow>
			</ProjectLayout>
		</Fragment>
	)
}

export default BopPage

export const query = graphql`
	query bopQuery {
		allContentfulProjectPage(filter: { slug: { eq: "bop" } }) {
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
