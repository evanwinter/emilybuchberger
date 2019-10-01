import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"
import Portrait from "../assets/images/Emily.jpg"
import ReactMarkdown from 'react-markdown'

const AboutPage = ({ data }) => {
	const [pageData] = data.allContentfulAbout.edges.map(edge => edge.node)
	const aboutImage = pageData.image.localFile.childImageSharp.fluid
	const aboutText = pageData.text.text
	return (
		<Fragment>
			<Seo title="About" keywords={["TODO"]} />
			<section id="about-page" className="page-container">
				<div className="about-layout">
					<div className="left">
						<Img fluid={aboutImage} />
					</div>
					<div className="right">
						<ReactMarkdown source={aboutText} />
					</div>
				</div>
			</section>
		</Fragment>
	)
}

/*

<p>
	Welcome! I'm Emily Buchberger, a designer in Chicago.
	I'm an ENFP according to the Myers-Briggs test and an Aries
	according to the stars. I, of course, do not subscribe to any labels
	and would love to get to know you more personally.
</p>
<p>
	<a href="mailto:emilybuchberger@gmail.com" target="_blank" rel="noopener noreferrer">
		emilybuchberger@gmail.com
	</a>
</p>

*/

export default AboutPage

export const query = graphql`
	query aboutQuery {
		allContentfulAbout {
			edges {
				node {
					text {
						text
					}
					image {
						localFile {
							childImageSharp {
								fluid(
									maxWidth: 600,
									quality: 90
								) {
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
