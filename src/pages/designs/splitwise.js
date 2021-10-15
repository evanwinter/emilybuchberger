import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const SplitwisePage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")
	const { images, summary, title, subtitle, heroImage } = pageData
	const allImages = prepareImages(images)

	return (
        <Fragment>
			<Seo title="Splitwise" keywords={["TODO"]} />
			<ProjectLayout name="splitwise">
				<Hero image={heroImage.localFile.childImageSharp.gatsbyImageData} alt={heroImage.title} />

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
					<GatsbyImage image={allImages.childImageSharp.gatsbyImageData} />
				</ProjectRow>

				<ProjectRow style={{margin: `5rem auto`}}>
					<div className="grid three">
						<div className="grid-item">
							<GatsbyImage image={allImages.childImageSharp.gatsbyImageData} />
						</div>
						<div className="grid-item">
							<GatsbyImage image={allImages.childImageSharp.gatsbyImageData} />
						</div>
						<div className="grid-item">
							<GatsbyImage image={allImages.childImageSharp.gatsbyImageData} />
						</div>
					</div>
				</ProjectRow>
			</ProjectLayout>
		</Fragment>
    );
}

export default SplitwisePage

export const query = graphql`query splitwiseQuery {
  allContentfulProjectPage(filter: {slug: {eq: "splitwise"}}) {
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
              gatsbyImageData(quality: 90, placeholder: NONE, layout: FULL_WIDTH)
            }
          }
        }
        heroImage {
          title
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: NONE, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`
