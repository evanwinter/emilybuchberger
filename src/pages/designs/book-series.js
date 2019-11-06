import React, { useState, Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../../components/seo"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const BookSeriesPage = ({ data }) => {
	const [pageData] = fromContentful(data, "project")
	const { images, summary, title, subtitle, heroImage } = pageData
	const hero = heroImage.localFile.childImageSharp
	const allImages = prepareImages(images)

	return (
		<Fragment>
			<Seo title="Book Series" keywords={["TODO"]} />
			<section id="book-series">
				<section className="project-page">
					<Hero fluid={hero.fluid} />

					<div className="project-wrapper">
						<section className="text-block intro">
							<h1>{title} &mdash;</h1>
							<h3>{subtitle}</h3>
							<p>{summary.summary}</p>
						</section>

						<ProjectRow>
							<Img fluid={allImages["project-book-series-2"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-book-series-3"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<div className="grid">
								<Img fluid={allImages["project-book-series-4"].fluid} />
								<Img fluid={allImages["project-book-series-5"].fluid} />
							</div>
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-book-series-6"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-book-series-7"].fluid} />
						</ProjectRow>

						<ProjectRow>
							<Img fluid={allImages["project-book-series-8"].fluid} />
						</ProjectRow>
					</div>
				</section>
			</section>
		</Fragment>
	)
}

export default BookSeriesPage

export const query = graphql`
	query bookSeriesQuery {
		allContentfulProject(filter: { slug: { eq: "book-series" } }) {
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
