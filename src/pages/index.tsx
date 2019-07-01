import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import pageStyles from "./page.module.scss"

export default ({ data }) => (
  <Layout>
    <BackgroundImage
      classId="index"
      className={indexStyles.gatsbyBackgroundImageIndex}
      fluid={data.file.childImageSharp.fluid}
      alt="Stephen Zeng with Subarus"
    >
      <div
        style={{
          height: `95vh`,
          display: `flex`,
          flexDirection: `column`,
          background: `rgba(0, 0, 0, 0.6)`,
        }}
      >
        <Typography
          variant="h2"
          color="secondary"
          className={pageStyles.topTypography}
          style={{
            textShadow: `1px 1px grey`,
          }}
        >
          Hello there!
        </Typography>
        <Typography
          display="inline"
          variant="h2"
          color="secondary"
          style={{
            textShadow: `1px 1px black`,
          }}
          gutterBottom
        >
          My friends know me as
        </Typography>
        <span style={{ marginTop: `auto`, marginBottom: `6em` }}>
          <Typography
            variant="h1"
            color="primary"
            gutterBottom
            style={{
              textShadow: `1px 1px black`,
              lineHeight: `100px`,
            }}
          >
            Stephen J Zeng
          </Typography>
          <Typography
            variant="h4"
            color="textPrimary"
            gutterBottom
            style={{
              textShadow: `1px 1px black`,
            }}
          >
            (Minus the "J" part)
          </Typography>
        </span>
      </div>
    </BackgroundImage>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "me-and-subarus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 10000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
