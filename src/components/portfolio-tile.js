import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import SmileyIcon from "../assets/icons/smiley.svg"

const PortfolioTile = ({ project, active }) => {
  const { slug, coverImage, title, subtitle } = project
  const path = `/designs/${slug}`
  const cover = coverImage.localFile.childImageSharp.gatsbyImageData
  return (
    <Link to={path} data-active={active} className="portfolio-item">
      <GatsbyImage image={cover} alt={coverImage.title} />
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
