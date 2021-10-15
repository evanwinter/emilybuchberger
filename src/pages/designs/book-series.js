import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../../components/seo"
import ProjectIntro from "../../components/project-intro"
import ProjectLayout from "../../layouts/project-layout"
import { Hero } from "../../components/hero"
import ProjectRow from "../../components/project-row"
import { prepareImages, fromContentful } from "../../utils"

const BookSeriesPage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")
	const { images, summary, title, subtitle, heroImage } = pageData
	const allImages = prepareImages(images)

	return (
        <Fragment>
			<Seo title="Book Series" keywords={["TODO"]} />
			<ProjectLayout name="book-series">
				<Hero image={heroImage.localFile.childImageSharp.gatsbyImageData} alt={heroImage.title} />
				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow>
					<GatsbyImage image={allImages["project-book-series-3"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<div className="grid">
						<GatsbyImage image={allImages["project-book-series-4"].fluid} />
						<GatsbyImage image={allImages["project-book-series-5"].fluid} />
					</div>
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["project-book-series-6"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["project-book-series-7"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["project-book-series-8"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["book-with-koko"].fluid} />
				</ProjectRow>
			</ProjectLayout>
		</Fragment>
    );
}

export default BookSeriesPage

export const query = graphql`query bookSeriesQuery {
  allContentfulProjectPage(filter: {slug: {eq: "book-series"}}) {
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
