import React, { Fragment } from "react"

import LayoutTest from "../components/layout-test.js"
import Header from "../components/header.js"

export default function Contact() {
  const header = "I'd love to talk! Email me at the address below"

  return (
    <LayoutTest>
      <br />
      <Header headerText={header} />
      <div>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    </LayoutTest>
  )
}
