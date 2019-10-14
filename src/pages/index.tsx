import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import pageStyles from "./page.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

export default ({ data }) => (
  <Layout>
    <BackgroundImage
      classId="index"
      fluid={data.file.childImageSharp.fluid}
      alt="Stephen Zeng with Subarus"
    >
      <div className={indexStyles.indexContents}>
        <Typography
          variant="h2"
          color="secondary"
          className={pageStyles.topTypography}
          style={{
            textShadow: `1px 1px black`,
          }}
        >
          <FormattedMessage id="hello" />
        </Typography>
        <Typography
          display="inline"
          variant="h2"
          color="secondary"
          className={indexStyles.shadowedText}
          gutterBottom
        >
          <FormattedMessage id="hello_2" />
        </Typography>
        <span style={{ marginTop: `auto`, marginBottom: `auto` }}>
          <Typography
            variant="h1"
            color="primary"
            gutterBottom
            className={indexStyles.shadowedText}
            style={{
              lineHeight: `125%`,
            }}
          >
            <FormattedMessage id="name" />
          </Typography>
          <Typography
            display="inline"
            variant="h4"
            color="textPrimary"
            gutterBottom
            style={{
              textShadow: `1px 1px 1px 1px white`,
              background: `rgba(255, 255, 255, 0.2)`,
            }}
          >
            <FormattedMessage id="name_2" />
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
