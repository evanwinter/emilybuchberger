import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import UnderConstruction from "../assets/images/under-construction.jpg"

const OtherPage = () => (
	<Fragment>
		<SEO title="Other" keywords={["TODO"]} />
		<section className="other-page">
			<img src={UnderConstruction} />
		</section>
	</Fragment>
)

export default OtherPage