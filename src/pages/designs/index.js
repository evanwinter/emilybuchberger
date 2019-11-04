import React, { Fragment } from "react"
import Seo from "../../components/seo"
import ProjectsGrid from "../../components/projects-grid"

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
						<ProjectsGrid />
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default DesignsPage