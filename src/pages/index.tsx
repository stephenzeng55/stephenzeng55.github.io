import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h2>Welcome to the portfolio of</h2>
    <h1>Stephen J Zeng</h1>
    <p>
      This is the initial version of my page, look forward to a more exciting page in the near future!
    </p>
    <div style={{maxWidth: `50vw`,margin: `auto`}}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  </Layout>
)


export const query = graphql`
  query {
    file(relativePath: { eq: "me-and-subarus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`