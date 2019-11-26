import React from "react"
import FluidImg from "./fluid-img"
import Img from "gatsby-image"

export const Hero = (props) => {
	return (
		<div className="ProjectHero">
			<Img {...props} />
		</div>
	)
}

export const FluidHero = (props) => {
	return (
		<div className="ProjectHero">
			<FluidImg {...props} />
		</div>
	)
}
