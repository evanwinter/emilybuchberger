import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortfolioTile = ({ project }) => {
	const { slug, id, coverImage, title, subtitle } = project
	const path = `/designs/${slug}`
	const cover = coverImage.localFile.childImageSharp.fluid
	return (
		<Link to={path} className="portfolio-item">
			<Img fluid={cover} />
			<div className="portfolio-item-reveal">
				<div className="portfolio-item-details">
					<h1 className="portfolio-item-title">
						{title} <span className="emdash">&mdash;</span>
					</h1>
					<h3 className="portfolio-item-subtitle">{subtitle}</h3>
				</div>
			</div>
		</Link>
	)
}

export default PortfolioTile
