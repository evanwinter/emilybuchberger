import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Seo from "@components/seo"
import Columns from "@components/columns"
import ReactMarkdown from "react-markdown"
import Anime from "react-anime"

const AboutPage = ({ data }) => {
  const [pageData] = data.allContentfulAboutPage.edges.map((edge) => edge.node)
  const aboutImage = pageData.image.localFile.childImageSharp.fluid
  const aboutText = pageData.text.text
  return (
    <Fragment>
      <Seo title="About" />
      <Columns padding={true}>
        <Anime translateY={["12vh", "0rem"]} opacity={[0, 1]} duration={1250} easing={"easeOutSine"}>
          <Img fluid={aboutImage} />
        </Anime>
        <Anime translateY={["12vh", "0rem"]} opacity={[0, 1]} duration={1000} easing={"easeOutSine"} delay={250}>
          <ReactMarkdown source={aboutText} />
        </Anime>
      </Columns>
    </Fragment>
  )
}

export default AboutPage

export const query = graphql`
  query aboutQuery {
    allContentfulAboutPage {
      edges {
        node {
          text {
            text
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
