import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo"

const DefaultTemplate = ({ data, pageContext }) => {
	const [pageData] = data.allContentfulProjectPage.edges.map(edge => edge.node)
	const { images, summary, title, subtitle, pdf } = pageData

	const templateClassName = title
		.split(" ")
		.join("-")
		.toLowerCase()

	return (
        <Fragment>
			<Seo title={title} keywords={[]} />
			<section className={`template-page ${templateClassName}-page`}>
				<section className="portfolio-page">
					<div className="hero">
						<GatsbyImage image={images[0].localFile.childImageSharp.gatsbyImageData} />
					</div>
					<section className="text-block">
						<h1>{title} &mdash;</h1>
						<h3>{subtitle}</h3>
						<p>{summary.summary}</p>
					</section>
					{images.map((image, index) => {
						if (index > 0)
							return <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} />;
					})}
				</section>
			</section>
		</Fragment>
    );
}
export default DefaultTemplate

/**
 * Gets $slug from pageContext.slug and gets only the Product with that slug.
 */
export const query = graphql`query defaultTemplateQuery($slug: String!) {
  allContentfulProjectPage(filter: {slug: {eq: $slug}}) {
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
          localFile {
            name
            childImageSharp {
              gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
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
