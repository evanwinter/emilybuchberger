/**
 * Convert a space-separated string to dash-case
 */
export const getSlug = (str) => {
	return str.toLowerCase().split(' ').join('-')
}