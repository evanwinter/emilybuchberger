import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import ProjectLayout from "../../layouts/project-layout"
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const CoalfirePage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")
	const { images, summary, title, subtitle, heroImage } = pageData
	const allImages = prepareImages(images)

	return (
        <Fragment>
			<Seo title="Coalfire" keywords={["TODO"]} />
			<ProjectLayout name="coalfire">
				<Hero image={heroImage.localFile.childImageSharp.gatsbyImageData} alt={heroImage.title} />
				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow>
					<GatsbyImage image={allImages["project-coalfire-stamp"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["project-coalfire-colorway"].fluid} />
				</ProjectRow>
			</ProjectLayout>
		</Fragment>
    );
}

export default CoalfirePage

export const query = graphql`query coalfireQuery {
  allContentfulProjectPage(filter: {slug: {eq: "coalfire"}}) {
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
