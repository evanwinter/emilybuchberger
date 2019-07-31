import React, { Fragment } from "react"
import SEO from "../components/seo"
import UnderConstruction from "../assets/images/under-construction.jpg"

const ThingsPage = () => (
	<Fragment>
		<SEO title="Things" keywords={["TODO"]} />
		<section className="things-page">
			<img src={UnderConstruction} />
		</section>
	</Fragment>
)

export default ThingsPage