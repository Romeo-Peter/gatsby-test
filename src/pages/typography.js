import React from "react"

import LayoutTest from "../components/layout-test.js"
import Header from "../components/header.js"

const header = "Hi! I'm building a fake Gatsby site as part of a tutorial!"

export default function typography() {
  return (
    <LayoutTest>
      <br />
      <Header headerText={header} />
      <br />
      <div>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </LayoutTest>
  )
}
