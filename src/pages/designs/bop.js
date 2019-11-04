import React, { Fragment, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImg from "gatsby-background-image"
import Seo from "../../components/seo"
import FluidImg from "../../components/fluid-img"
import { prepareImages, fromContentful, fadeIn } from "../../utils"

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
					<div className="hero">
						<BackgroundImg fluid={hero.fluid} />
						<section className="intro text-block">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>
					</div>

					<div className="project-wrapper">
						<h3 className="portfolio-center-heading">User Interviews</h3>
						<div className="grid three">
							<div className="card">
								<Img fluid={allImages["BOP-graph-1"].fluid} />
							</div>
							<div className="card">
								<Img fluid={allImages["BOP-graph-2"].fluid} />
							</div>
							<div className="card">
								<Img fluid={allImages["BOP-graph-3"].fluid} />
							</div>
						</div>

						<h3 className="portfolio-center-heading">User Personas</h3>
						<div className="grid three">
							<div className="card">
								<Img fluid={allImages["BOP-persona-1"].fluid} />
							</div>
							<div className="card">
								<Img fluid={allImages["BOP-persona-2"].fluid} />
							</div>
							<div className="card">
								<Img fluid={allImages["BOP-persona-3"].fluid} />
							</div>
						</div>

						<h3 className="portfolio-center-heading">Style Guide</h3>
						<Img fluid={allImages["BOP-styleguide"].fluid} />

						<FluidImg
							src={allImages["BOP-joinparty"].fluid}
							alt={allImages["BOP-joinparty"].title}
						/>

						<div className="grid two">
							<div className="grid-item">
								<Img fluid={allImages["BOP-zoom-nowplaying"].fluid} />
							</div>
							<div className="grid-item copy">
								<div className="content-wrapper">
									<h3>User Problems:</h3>
									<p>
										not everyone can easily contribute music in group settings
									</p>
									<p>not easy to hear a song and add it to music</p>
									<h3>Solutions:</h3>
									<p>
										allow everyone to contribute to the party favorite songs to
										save to your library
									</p>
								</div>
							</div>
						</div>

						<div className="grid two">
							<div className="grid-item copy">
								<div className="content-wrapper">
									<h3>User Feedback:</h3>
									<p>
										“It’d be cool to save/log everything that was played during a
										specific event into a playlist”
									</p>
									<p>not easy to hear a song and add it to music</p>
									<h3>Solutions:</h3>
									<p>Go to your history to relive the night</p>
								</div>
							</div>
							<div className="grid-item">
								<FluidImg
									pad={'163%'}
									fit={'contain'}
									src={allImages["BOP-playlist"].fluid}
									alt={allImages["BOP-playlist"].title}
								/>
							</div>
						</div>
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
