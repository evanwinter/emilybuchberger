/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const defaultTemplate = path.resolve("src/templates/default-template.js")
    resolve(
      graphql(`
        {
          allContentfulProjectPage(filter: { useDefaultTemplate: { eq: true }}) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        } else if (result.data.allContentfulProjectPage.edges.length < 1) {
          return
        }
        result.data.allContentfulProjectPage.edges.forEach(edge => {
          createPage({
            path: "/designs/" + edge.node.slug,
            component: defaultTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
