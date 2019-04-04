import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import styles from "./index.module.scss"

export default ({ data }) => (
  <Layout>
    <BackgroundImage
      classId="index"
      className={styles.gatsbyBackgroundImageIndex}
      fluid={data.file.childImageSharp.fluid}
      alt="Stephen Zeng with Subarus"
    >
      <Typography variant="h2" color="secondary" gutterBottom style={{paddingTop: 20, paddingBottom: 150}}>
        Welcome to the portfolio of
      </Typography>
      <Typography variant="h1" color="secondary" gutterBottom>
        Stephen J Zeng
      </Typography>
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
