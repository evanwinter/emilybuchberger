import React from "react"
import FluidImg from "./fluid-img"
import { GatsbyImage } from "gatsby-plugin-image";

export const Hero = (props) => {
	return (
    <div className="ProjectHero">
			<GatsbyImage {...props} />
		</div>
  );
}

export const FluidHero = (props) => {
	return (
		<div className="ProjectHero">
			<FluidImg {...props} />
		</div>
	)
}
