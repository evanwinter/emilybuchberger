/**
 * Convert a space-separated string to dash-case
 */
export const getSlug = (str) => {
	return str.toLowerCase().split(' ').join('-')
}

/**
 * Replace dashes with spaces
 */
export const dashToSpace = (str) => {
	if (str.split("-").length > 1) {
		return str.split("-").join(" ")
	} else {
		return str
	}
}