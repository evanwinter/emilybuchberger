/**
 * Convert a space-separated string to dash-case
 */
export const getSlug = (str) => {
	return str
		.toLowerCase()
		.split(" ")
		.join("-")
}

/**
 * Replace dashes with spaces
 */
export const dashToSpace = (str) => {
	if (str.indexOf("-") > -1) {
		return str.split("-").join(" ")
	} else {
		return str
	}
}

/**
 * Get source (either publicURL or childImageSharp.fluid)
 */
const getSource = ({ childImageSharp, publicURL }) => {
	if (childImageSharp) {
		if (childImageSharp.fluid) {
			return childImageSharp.fluid
		} else if (childImageSharp.fixed) {
			return childImageSharp.fixed
		}
	} else if (publicURL) {
		return publicURL
	} else {
		console.error(`Couldn't get a source`)
	}
}

/**
 * Extract images
 */
export const prepareImages = (images) => {
	const prepared = images.reduce((acc, curr) => {
		const { localFile, title } = curr
		const src = getSource(localFile)
		acc[title] = {
			title: title,
			fluid: localFile.childImageSharp
				? localFile.childImageSharp.gatsbyImageData
				: localFile.publicURL,
			src: src
		}
		return acc
	}, {})
	return prepared
}

/**
 * Capitalize a string
 */
export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Extract data nodes from Contentful data object
 */
export const fromContentful = (data, type) => {
	const key = `allContentful${capitalize(type)}`
	return data[key].edges.map((edge) => edge.node)
}
