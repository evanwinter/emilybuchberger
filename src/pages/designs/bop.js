import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Hero } from "../../components/hero"
import Seo from "../../components/seo"
import FluidImg from "../../components/fluid-img"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const BopPage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")
	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Bop" keywords={["TODO"]} />
			<section id="bop">
				<section className="project-page">
					<Hero fluid={hero.fluid} />

					<div className="project-wrapper">
						<section className="intro text-block">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>

						<ProjectRow margin={"5rem"}>
							<h3 className="portfolio-center-heading">User Interviews</h3>
							<div className="grid three">
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-graph-1"].fluid} />
									</div>
								</div>
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-graph-2"].fluid} />
									</div>
								</div>
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-graph-3"].fluid} />
									</div>
								</div>
							</div>
						</ProjectRow>

						<ProjectRow margin={"5rem"}>
							<h3
								className="portfolio-center-heading"
								style={{ marginTop: `5rem` }}
							>
								User Personas
							</h3>
							<div className="grid three">
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-persona-1"].fluid} />
									</div>
								</div>
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-persona-2"].fluid} />
									</div>
								</div>
								<div className="grid-item">
									<div className="card">
										<Img fluid={allImages["BOP-persona-3"].fluid} />
									</div>
								</div>
							</div>
						</ProjectRow>

						<ProjectRow margin={"5rem"}>
							<Img
								fluid={allImages["BOP-styleguide"].fluid}
								style={{ maxHeight: "100vh" }}
							/>
						</ProjectRow>

						<ProjectRow margin={"5rem"}>
							<FluidImg
								src={allImages["BOP-joinparty"].fluid}
								pad={"131%"}
								alt={allImages["BOP-joinparty"].title}
							/>
						</ProjectRow>

						<ProjectRow margin={"5rem"}>
							<div className="grid two">
								<div className="grid-item">
									<Img
										fluid={allImages["BOP-zoom-nowplaying"].fluid}
										style={{ maxHeight: "80vh" }}
										imgStyle={{ objectFit: "contain" }}
									/>
								</div>
								<div className="grid-item copy">
									<div className="content-wrapper">
										<h3>User Problems:</h3>
										<p>
											It’s difficult for everyone to contribute to music in
											group settings.
										</p>
										<p>
											When you hear a song you like it takes multiple steps to
											find out what it is and then add it to your library.
										</p>
										<h3>Solutions:</h3>
										<p>
											Everyone is able to add their music to the party through
											an easy to use interface.
										</p>
										<p>
											When you hear a song you enjoy, you can open the app to
											see what’s playing. Once you favorite that song it
											automatically adds it to your song library.
										</p>
									</div>
								</div>
							</div>
						</ProjectRow>

						<ProjectRow margin={"5rem"}>
							<div className="grid two">
								<div className="grid-item copy">
									<div className="content-wrapper">
										<h3>User Feedback:</h3>
										<p>
											“It’d be cool to save/log everything that was played
											during a specific event into a playlist”
										</p>
										<p>not easy to hear a song and add it to music</p>
										<h3>Solutions:</h3>
										<p>Go to your history to relive the night</p>
									</div>
								</div>
								<div className="grid-item">
									<FluidImg
										pad={"131%"}
										fit={"contain"}
										style={{ maxHeight: "80vh" }}
										src={allImages["BOP-playlist"].fluid}
										alt={allImages["BOP-playlist"].title}
									/>
								</div>
							</div>
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["BOP-flow"].fluid} />
						</ProjectRow>
					</div>
				</section>
			</section>
		</Fragment>
	)
}

export default BopPage

export const query = graphql`
	query bopQuery {
		allContentfulProject(filter: { slug: { eq: "bop" } }) {
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
