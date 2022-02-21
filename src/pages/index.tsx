import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage} from "gatsby-plugin-image"

import { BgImage, convertToBgImage } from "gbimage-bridge"

import Layout from "../components/layout"
import * as indexStyles from "./index.module.scss"
import * as pageStyles from "./page.module.scss"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import {Typography} from "@mui/material";

const Index = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me-and-subarus.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
    `
  );

  const image = getImage(placeholderImage)

  return (
    <Layout>
      <BgImage image={image}>
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
      </BgImage>
    </Layout>
  )
}

export default Index