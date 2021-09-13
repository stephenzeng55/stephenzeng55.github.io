import React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import * as pageStyles from "./page.module.scss"
import Email from "@material-ui/icons/Email"
import Button from "@material-ui/core/Button"
import SvgIcon from "@material-ui/core/SvgIcon"
import { FormattedMessage } from "gatsby-plugin-react-intl"

export default () => (
  <Layout>
    <Typography
      variant="h4"
      color="textPrimary"
      className={pageStyles.topTypography}
      gutterBottom
    >
      <FormattedMessage id="reach_out" />
    </Typography>
    <Button
      variant="contained"
      color="inherit"
      aria-label="Email"
      href="mailto:stephen.zeng55@gmail.com"
      size="large"
      className={pageStyles.linkButton}
    >
      <Email fontSize="large" />
    </Button>
    <Button
      variant="contained"
      color="inherit"
      aria-label="LinkedIn"
      href="https://www.linkedin.com/in/stephen-zeng-482b0750"
      target="_blank"
      size="large"
      className={pageStyles.linkButton}
    >
      <SvgIcon fontSize="large">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </SvgIcon>
    </Button>
  </Layout>
)
