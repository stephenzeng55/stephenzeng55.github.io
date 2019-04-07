import React from "react"
import { Link } from "gatsby"

import styles from "./layout.module.scss"
import logo from "../images/icon.png"
import { Helmet } from "react-helmet"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"

const NavLink = props => (
  <Button color="inherit" size="medium">
    <Link className={styles.navLink} to={props.to}>
      {props.children}
    </Link>
  </Button>
)
export default ({ children }) => (
  <div>
    <Helmet>
      <title>Stephen J Zeng Portfolio</title>
    </Helmet>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton className={styles.homeIconLink} aria-label="Home">
          <Link to="/" className={styles.link}>
            <img src={logo} width="50" height="50" alt="Stephen Zeng Logo" />
          </Link>
        </IconButton>
        <NavLink aria-label="About" to="/about/">
          About
        </NavLink>
        <NavLink aria-label="Contact" to="/contact/">
          Contact
        </NavLink>
      </Toolbar>
    </AppBar>
    <div className={styles.children}>{children}</div>
  </div>
)
