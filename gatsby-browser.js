/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/**
 * Import styles
 */
import "./src/styles/index.scss"

/**
 * Current device
 */
// eslint-disable-next-line
import device from "current-device"

/**
 * Disable auto-scroll to top on page reload
 */
export const shouldUpdateScroll = () => false


/**
 * Intersection Observer polyfill
 * (required for gatsby-background-image)
 */
export const onClientEntry = () => {

	// typography.injectStyles()

  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled`)
  }
}