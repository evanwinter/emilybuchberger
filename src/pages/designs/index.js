import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"
import { getSlug } from "../../utils"

const DesignsPage = ({ data }) => {
	const projects = data.allContentfulProjects.edges.map((edge) => edge.node)
	return (
		<Fragment>
			<SEO title="Designs" keywords={["emily", "buchberger", "design", "portfolio"]} />
			<section className="portfolio-page">
				<div className="grid two">
					{projects.map(project => (
						<Link to={`designs/${project.slug}`} className="project" key={project.id}>
							<Img fluid={project.coverImage.localFile.childImageSharp.fluid} />
							<div className="project-reveal">
								<div className="project-details">
									<h1 className="title">{project.title} <span className="emdash">&mdash;</span></h1>
									<h3 className="subtitle">{project.subtitle}</h3>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</Fragment>
	)
}

export default DesignsPage

export const query = graphql`
	query designsQuery {
	  allContentfulProjects {
	    edges {
	      node {
	        id
	        title
	        slug
	        subtitle
	        coverImage {
	        	title
	        	localFile {
	        		childImageSharp {
	        			fluid(maxWidth: 1440) {
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
