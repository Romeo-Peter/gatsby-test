import React from "react"

import { Link } from "gatsby"

import layoutStyles from "../components/layout-test.module.css"

const Nav = props => {
  return (
    <li className={layoutStyles.listLink}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

export default function LayoutTest({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <header id={layoutStyles.header}>
        <Link to="/" id={layoutStyles.headerLink}>
          <h3 id={layoutStyles.title}>MySweetSite</h3>
        </Link>
      </header>
      <ul id={layoutStyles.nav}>
        <Nav to="/">Home</Nav>
        <Nav to="/about/">About</Nav>
        <Nav to="/contact/">Contact</Nav>
        <Nav to="/typography/">Typography</Nav>
        <Nav to="/layout-about">About layout</Nav>
        <Nav to="/layout-contact">contact layout</Nav>
      </ul>
      {children}
    </div>
  )
}
