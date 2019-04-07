import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import pageStyles from "./page.module.scss"

export default () => (
  <Layout>
    <Typography
      variant="h1"
      color="textPrimary"
      className={pageStyles.topTypography}
    >
      Who am I?
    </Typography>
    <Typography
      variant="headline"
      color="textPrimary"
    >
      Beantown born and raised.
    </Typography>
  </Layout>
)
