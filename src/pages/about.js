import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'

const AboutPage = ({ data }) => {
	const [pageData] = data.allContentfulAboutPage.edges.map(edge => edge.node)
	const aboutImage = pageData.image.localFile.childImageSharp.gatsbyImageData
	const aboutText = pageData.text.text
	return (
        <Fragment>
			<Seo title="About" keywords={["about", "emily buchberger", "graphic designer", "chicago"]} />
			<section id="about-page" className="page-container">
				<div className="about-layout">
					<div className="left">
						<GatsbyImage image={aboutImage} />
					</div>
					<div className="right">
						<ReactMarkdown>
              {aboutText}
            </ReactMarkdown>
					</div>
				</div>
			</section>
		</Fragment>
    );
}

export default AboutPage

export const query = graphql`query aboutQuery {
  allContentfulAboutPage {
    edges {
      node {
        text {
          text
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 90, placeholder: NONE, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`
