import React from "react"

import LayoutTest from "../components/layout-test"
import Header from "../components/header"

const IndexPage = () => (
  <LayoutTest>
    <br />
    <Header headerText="Home page" />
    <p>What a world huh?</p>
    <img
      src="https://source.unsplash.com/random/400x200"
      alt="unsplash-source"
    />
  </LayoutTest>
)

export default IndexPage
