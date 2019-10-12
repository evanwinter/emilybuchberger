import React, { Fragment } from "react"
import Seo from "../components/seo"
import UnderConstruction from "../assets/images/under-construction.jpg"

const ThingsPage = () => (
	<Fragment>
		<Seo title="Things" keywords={["TODO"]} />
		<section className="things-page">
			<img src={UnderConstruction} />
		</section>
	</Fragment>
)

export default ThingsPage