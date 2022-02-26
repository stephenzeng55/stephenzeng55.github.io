import React from "react"

import * as styles from "./layout.module.scss"
import logo from "../images/icon.png"
import { Helmet } from "react-helmet"
import theme from "../theme"
import { Link, FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import Language from "./language"
import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

const NavLink = props => (
  <Button color="inherit" size="medium">
    <Link className={styles.navLink} to={props.to}>
      <FormattedMessage id={props.id} />
    </Link>
  </Button>
)
const Layout = ({ children, intl }) => (
  <div lang={intl.locale}>
    <Helmet>
      <title>{intl.formatMessage({ id: "title" })}</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton className={styles.homeIconLink} aria-label="Home">
            <Link to="/" className={styles.link}>
              <img src={logo} width="50" height="50" alt="Stephen Zeng Logo" />
            </Link>
          </IconButton>
          <NavLink aria-label="About" to="/about/" id="about" />
          <NavLink aria-label="Contact" to="/contact/" id="contact" />
          <div style={{ marginLeft: `auto`, float: `right` }}>
            <Language />
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.children}>{children}</div>
    </ThemeProvider>
  </div>
)

export default injectIntl(Layout)
