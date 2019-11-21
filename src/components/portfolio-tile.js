import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import SmileyIcon from "../assets/icons/smiley.svg"

const PortfolioTile = ({ project, active }) => {
	const { slug, coverImage, title, subtitle } = project
	const path = `/designs/${slug}`
	const cover = coverImage.localFile.childImageSharp.fluid
	return (
		<Link to={path} data-active={active} className="portfolio-item">
			<Img fluid={cover} />
			<div className="portfolio-item-reveal">
				<div className="portfolio-item-details">
					<h1 className="portfolio-item-title">
						{title} <span className="emdash">&mdash;</span>
					</h1>
					<h3 className="portfolio-item-subtitle">{subtitle}</h3>
				</div>
			</div>
			{active && (
				<div className="smiley-container">
					<SmileyIcon />
				</div>
			)}
		</Link>
	)
}

export default PortfolioTile
