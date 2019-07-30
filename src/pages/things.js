import React, { Fragment } from "react"
import SEO from "../components/seo"
import UnderConstruction from "../assets/images/under-construction.jpg"

const ThingsPage = () => (
	<Fragment>
		<SEO title="Other" keywords={["TODO"]} />
		<section className="other-page">
			<img src={UnderConstruction} />
		</section>
	</Fragment>
)

export default ThingsPage