import React, { Fragment } from "react"
import Seo from "../../components/seo"
import PortfolioGrid from "../../components/portfolio-grid"

const DesignsPage = () => {
  return (
    <Fragment>
      <Seo
        title="Designs"
        keywords={["emily", "buchberger", "design", "portfolio"]}
      />
      <section className="portfolio-page">
        <div className="portfolio-wrapper">
          <div className="grid two">
            <PortfolioGrid />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default DesignsPage
