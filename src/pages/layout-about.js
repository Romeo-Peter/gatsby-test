import React, { Fragment } from "react"

import LayoutTest from "../components/layout-test.js"
import Header from "../components/header.js"

export default function Layout() {
  return (
    <LayoutTest>
      <br />
      <Header headerText="About layout page" />
      <div>
        <p>
          This page good enough, smart enough, and gosh darn it, people like it!
        </p>
      </div>
    </LayoutTest>
  )
}
