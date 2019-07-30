import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Portrait from "../assets/images/Emily.jpg"

const AboutPage = () => (
	<Fragment>
		<SEO title="About" keywords={["TODO"]} />
		<section id="about-page" className="page-container">
			<div className="about-layout">
				<div className="left">
					<img src={Portrait} />
				</div>
				<div className="right">
					<p>
						Welcome! I'm Emily Buchberger, a designer and student in Chicago.
						I'm an ENFP according to the Myers-Briggs test and an Aries
						according to the stars. I, of course, do not subscribe to any labels
						and would love to get to know you more personally.
					</p>
					<p>
						<a href="mailto:emilybuchberger@gmail.com" target="_blank">
							emilybuchberger@gmail.com
						</a>
					</p>
				</div>
			</div>
		</section>
	</Fragment>
)

export default AboutPage
