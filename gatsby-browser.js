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
 * Disable auto-scroll to top on page reload
 */
export const shouldUpdateScroll = () => {
  return false;
};