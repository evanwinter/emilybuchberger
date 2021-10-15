import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Hero } from "../../components/hero"
import ProjectLayout from "../../layouts/project-layout"
import ProjectIntro from "../../components/project-intro"
import ExternalLink from "../../assets/icons/external-link.svg"
import ProjectRow from "../../components/project-row"
import Seo from "../../components/seo"
import { prepareImages, fromContentful } from "../../utils"

const NyxPage = ({ data }) => {
	const [pageData] = fromContentful(data, "projectPage")
	const { images, pdf, summary, title, subtitle, heroImage } = pageData
	const allImages = prepareImages(images)

	return (
        <Fragment>
			<Seo title="Nyx" keywords={["TODO"]} />
			<ProjectLayout name="nyx">
				<div className="hero">
					<Hero image={heroImage.localFile.childImageSharp.gatsbyImageData} alt={heroImage.title} />
				</div>
				<ProjectIntro
					title={title}
					subtitle={subtitle}
					summary={summary.summary}
				/>

				<ProjectRow>
					<GatsbyImage
                        image={allImages["project-nyx-2"].fluid}
                        style={{ maxHeight: "100vh" }} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage
                        image={allImages["project-nyx-3"].fluid}
                        style={{ maxHeight: "100vh" }} />
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage
                        image={allImages["project-nyx-4"].fluid}
                        style={{ maxHeight: "100vh" }} />
				</ProjectRow>

				<ProjectRow>
					<div className="grid" style={{ marginTop: `1rem` }}>
						<GatsbyImage image={allImages["project-nyx-5"].fluid} />
						<GatsbyImage image={allImages["project-nyx-6"].fluid} />
					</div>
				</ProjectRow>

				<ProjectRow>
					<GatsbyImage image={allImages["project-nyx-7"].fluid} />
				</ProjectRow>

				<ProjectRow>
					<a
						href={pdf.localFile.publicURL}
						className="icon-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						view full brandbook
						<ExternalLink />
					</a>
				</ProjectRow>

			</ProjectLayout>
		</Fragment>
    );
}

export default NyxPage

export const query = graphql`query nyxQuery {
  allContentfulProjectPage(filter: {slug: {eq: "nyx"}}) {
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
