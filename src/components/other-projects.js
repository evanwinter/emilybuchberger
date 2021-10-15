import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackIcon from "../assets/icons/back.svg"
import NextIcon from "../assets/icons/next.svg"
import PortfolioTile from "./portfolio-tile"
import { fromContentful } from "../utils"

const OtherProjects = () => {
	const data = useStaticQuery(graphql`query otherProjectsQuery {
  allContentfulPortfolioLandingPage {
    edges {
      node {
        title
        projects {
          ... on ContentfulProjectPage {
            id
            slug
            subtitle
            title
            coverImage {
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
  }
}
`)

	const slug =
		typeof window !== "undefined" && window.location.pathname.split("/")[2]

	const [portfolio] = fromContentful(data, "portfolioLandingPage")
	const { projects } = portfolio
	const slugs = projects.map((project) => project.slug)
	const currentIndex = slugs.indexOf(slug)

	// Get next indices
	const lastIndex = slugs.length - 1
	const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1
	const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1

	// Get next and previous projects
	const prevSlug = slugs[prevIndex]
	const nextSlug = slugs[nextIndex]

	return (
		<div className="OtherProjects">
			<nav role="navigation">
				<Link to={`/designs/${prevSlug}`} className="icon-link icon-left">
					<BackIcon />
					previous project
				</Link>
				<Link to={`/designs/${nextSlug}`} className="icon-link icon-right">
					next project
					<NextIcon />
				</Link>
			</nav>

			<div className="projects">
				{projects.map((project) => (
					<PortfolioTile
						key={project.slug}
						project={project}
						active={project.slug === slug}
					/>
				))}
			</div>
		</div>
	)
}

export default OtherProjects
