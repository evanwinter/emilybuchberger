import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

const CoalfirePage = ({ data }) => {
	const [pageData] = data.allContentfulProjects.edges.map(edge => edge.node)
	const { images } = pageData

	const stampImg = images.find(image => image.localFile.name === "project-coalfire-stamp")
	const menuImgTwo = images.find(image => image.localFile.name === "project-coalfire-menu-2")
	const colorwayImg = images.find(image => image.localFile.name === "project-coalfire-colorway")

	return (
		<Fragment>
			<SEO title="Coalfire" keywords={["TODO"]} />
			<section id="coalfire">
				<section className="portfolio-page">
					<Img fluid={menuImgTwo.localFile.childImageSharp.fluid} />
					<section className="text-block">
						<h1>Coalfire &mdash;</h1>
						<h3>logo design</h3>
						<p>
							Coalfire pizza is a neighborhood favorite with inventive food
							pairings and an outdated design. Recently, it has opened a second
							location in the up and coming Southport neighborhood. To bring it up
							to speed with it's neighbors, I used elements from their heritage as
							well as their inspired menu to make a logo that feels as lively as
							their new location.
						</p>
					</section>
					<Img fluid={stampImg.localFile.childImageSharp.fluid} />
					<Img fluid={colorwayImg.localFile.childImageSharp.fluid} />
				</section>
			</section>
		</Fragment>
	)
}

export default CoalfirePage

export const query = graphql`
	query coalfireQuery {
		allContentfulProjects(filter: { slug: { eq: "coalfire" } }) {
			edges {
				node {
					id
					title
					subtitle
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
