import React from "react"

const FluidImg = ({ src, alt, fit, pad }) => {
	return (
		<div className={`gatsby-image-wrapper regular-image ${fit || ""}`}>
			<div style={{ width: `100%`, paddingBottom: pad }}></div>
			<img src={src} alt={alt} />
		</div>
	)
}

export default FluidImg
