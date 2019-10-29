import anime from "animejs"

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
 * Extract images
 */
export const prepareImages = (images) => {
	const prepared = images.reduce((acc, curr) => {
		const { localFile, title } = curr
		acc[title] = {
			title: title,
			fluid: localFile.childImageSharp
				? localFile.childImageSharp.fluid
				: localFile.publicURL,
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

/**
 * (TODO) Finish this
 * Stagger-in animation function
 */
export const staggerIn = (duration = 1000, targets = []) => {
	if (targets.length < 1) {
		throw new Error("No targets were passed to staggerIn()")
	}

	const options = {
		targets,
		duration,
		easing: "easeOutExpo",
	}

	const tl = anime.timeline(options)

	return tl
}

export const fadeIn = (targets = "") => {
	console.log("fading in", targets)
	const options = {
		targets,
		duration: 2000,
		delay: 750,
		easing: "easeOutExpo",
		opacity: 1,
		// translateX: 5,
		complete: function(anim) {
			anim.animatables[0].target && anim.animatables[0].target.classList.remove("fades-in")
		}
	}
	anime(options)
}