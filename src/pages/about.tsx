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
    <Typography
      variant="body1"
      color="textPrimary"
      style={{ width: `75%`, margin: `0 auto` }}
    >
      <FormattedMessage id="who_am_i_blurb" />
    </Typography>
    <Typography
      variant="h2"
      color="textPrimary"
      gutterBottom
      className={pageStyles.topTypography}
    >
      <FormattedMessage id="what_do_i_do" />
    </Typography>
    <Typography
      variant="body1"
      color="textPrimary"
      style={{ width: `75%`, margin: `0 auto` }}
    >
      <FormattedMessage id="what_do_i_do_blurb" />
    </Typography>
    <Typography
      variant="h2"
      color="textPrimary"
      gutterBottom
      className={pageStyles.topTypography}
    >
      <FormattedMessage id="what_do_i_do_fun" />
    </Typography>
    <Typography
      variant="body1"
      color="textPrimary"
      style={{ width: `75%`, margin: `0 auto` }}
    >
      <FormattedMessage id="what_do_i_do_fun_blurb" />
    </Typography>
  </Layout>
)
