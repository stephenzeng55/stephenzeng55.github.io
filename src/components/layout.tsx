import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.scss"
import logo from "../images/icon.png"
import { Helmet } from "react-helmet"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../theme"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Language from "./language"

const NavLink = props => (
  <Button color="inherit" size="medium">
    <Link className={styles.navLink} to={props.to}>
      <FormattedMessage id={props.id} />
    </Link>
  </Button>
)
const Layout = ({ children, intl }) => (
  <div>
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
          <div style={{ marginLeft: `auto`, marginRight: 0 }}>
            <NavLink aria-label="About" to="/about/" id="about" />
            <NavLink aria-label="Contact" to="/contact/" id="contact" />
            <div style={{ float: `right` }}>
              <Language />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.children}>{children}</div>
    </ThemeProvider>
  </div>
)

export default injectIntl(Layout)
