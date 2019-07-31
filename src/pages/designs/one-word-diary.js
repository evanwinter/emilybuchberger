import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

const OneWordDiaryPage = ({ data }) => {

	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images, summary, title, subtitle } = pageData

	const right = images.find(image => image.localFile.name === "project-one-word-diary-1")
	const spooky = images.find(image => image.localFile.name === "project-one-word-diary-2")
	const newnew = images.find(image => image.localFile.name === "project-one-word-diary-3")
	const crisp = images.find(image => image.localFile.name === "project-one-word-diary-4")
	const wig = images.find(image => image.localFile.name === "project-one-word-diary-5")
	const slow = images.find(image => image.localFile.name === "project-one-word-diary-6")
	const queen = images.find(image => image.localFile.name === "project-one-word-diary-7")
	const lost = images.find(image => image.localFile.name === "project-one-word-diary-8")
	const early = images.find(image => image.localFile.name === "project-one-word-diary-9")
	const fuck = images.find(image => image.localFile.name === "project-one-word-diary-10")
	const barky = images.find(image => image.localFile.name === "project-one-word-diary-11")
	const everywhere = images.find(image => image.localFile.name === "project-one-word-diary-12")

	return (
		<Fragment>
			<SEO title="One Word Diary" keywords={["TODO"]} />
			<section id="one-word-diary">
				<section className="portfolio-page">
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>
					<div className="grid three">
						<Img fluid={right.localFile.childImageSharp.fluid} />
						<Img fluid={spooky.localFile.childImageSharp.fluid} />
						<Img fluid={newnew.localFile.childImageSharp.fluid} />
						<Img fluid={crisp.localFile.childImageSharp.fluid} />
						<Img fluid={wig.localFile.childImageSharp.fluid} />
						<Img fluid={slow.localFile.childImageSharp.fluid} />

						<Img fluid={queen.localFile.childImageSharp.fluid} />
						<Img fluid={lost.localFile.childImageSharp.fluid} />
						<Img fluid={early.localFile.childImageSharp.fluid} />
						<Img fluid={fuck.localFile.childImageSharp.fluid} />
						<Img fluid={barky.localFile.childImageSharp.fluid} />
						<Img fluid={everywhere.localFile.childImageSharp.fluid} />
					</div>
				</section>
			</section>
		</Fragment>
	)
}

export default OneWordDiaryPage

export const query = graphql`
	query oneWordDiaryQuery {
		allContentfulProjects(filter: { slug: { eq: "one-word-diary" } }) {
			edges {
				node {
					id
					title
					subtitle
					summary {
						summary
					}
					images {
						localFile {
							name
							childImageSharp {
								fluid(maxWidth: 1440) {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
					coverImage {
						title
						localFile {
							childImageSharp {
								id
							}
						}
					}
				}
			}
		}
	}
`
