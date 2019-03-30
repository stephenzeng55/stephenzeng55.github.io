import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import styles from "./layout.module.scss"
import logo from "../images/icon.png"
import { Helmet } from 'react-helmet';

const NavLink = props => (
  <Nav.Item>
    <Link className={styles.navLink} to={props.to}>
      {props.children}
    </Link>
  </Nav.Item>
)
export default ({ children }) => (
  <div>
    <Helmet>
      <title>Stephen J Zeng Portfolio</title>
    </Helmet>
    <Navbar bg="dark">
      <Navbar.Brand>
        <Link to="/" className={styles.navLink}>
          <img
            src={logo}
            width="50"
            height="50"
            style={{ marginBottom: 0 }}
            alt="Stephen Zeng Logo"
          />
        </Link>
      </Navbar.Brand>
      <Nav>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </Nav>
    </Navbar>
    <div className={styles.children}>{children}</div>
  </div>
)
