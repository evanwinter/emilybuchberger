import React from "react"

const FluidImg = ({ src, alt }) => {
	return (
		<div className="gatsby-image-wrapper regular-image">
			<div style={{width: `100%`, paddingBottom: `70%`}}></div>
			<img src={src} alt={alt} />
		</div>
	)
}

export default FluidImg