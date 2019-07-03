import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import pageStyles from "./page.module.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

export default () => (
  <Layout>
    <Typography
      variant="h2"
      color="textPrimary"
      gutterBottom
      className={pageStyles.topTypography}
    >
      <FormattedMessage id="who_am_i" />
    </Typography>
    <Typography variant="h5" color="textPrimary">
      <FormattedMessage id="blurb" />
    </Typography>
  </Layout>
)
