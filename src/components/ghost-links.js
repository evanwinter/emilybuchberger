import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const GhostLinks = ({ data }) => {

	const projects = data.allContentfulProjects.edges.map(edge => edge.node)
	const slugs = projects.map(project => project.slug)

	const links = slugs.map(slug => {
		return <Link to={`designs/${slug}`} />
	})

	return links
}

/**
 * Fetch screensaver images from Contentful and pass them as props to the
 * <Screensaver> component
 */
export default () => (
	<StaticQuery
		query={graphql`
			query projectsQuery {
				allContentfulProjects {
					edges {
						node {
							slug
						}
					}
				}
			}
		`}
		render={data => (
			<GhostLinks data={data} />
		)}
	/>
)
