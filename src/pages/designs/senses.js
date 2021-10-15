import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import ProjectRow from "../../components/project-row"
import { Hero } from "../../components/hero"
import { prepareImages, fromContentful } from "../../utils"

const SensesPage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")

	const { images, summary, title, subtitle, heroImage } = pageData
	const allImages = prepareImages(images)

	return (
        <Fragment>
			<Seo title="Senses" keywords={["TODO"]} />
			<ProjectLayout name="senses">
				<Hero image={heroImage.localFile.childImageSharp.gatsbyImageData} alt={heroImage.title} />
				<div className="project-wrapper">
					<ProjectIntro
						title={title}
						subtitle={subtitle}
						summary={summary.summary}
					/>
					<ProjectRow>
						<GatsbyImage image={allImages["project-senses-2"].fluid} />
					</ProjectRow>
					<ProjectRow>
						<GatsbyImage image={allImages["project-senses-3"].fluid} />
					</ProjectRow>
				</div>
			</ProjectLayout>
		</Fragment>
    );
}

export default SensesPage

export const query = graphql`query sensesQuery {
  allContentfulProjectPage(filter: {slug: {eq: "senses"}}) {
    edges {
      node {
        id
        title
        subtitle
        summary {
          summary
        }
        pdf {
          localFile {
            publicURL
          }
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
