import React from 'react'

import {Link} from 'gatsby'

import Header from '../components/header.js'

const IndexPage = () => (
  <div style={{ color: `teal`}}>
    <Link to='/contact'>Contact</Link>
    <Header headerText='Home page' />
    <p>What a world huh?</p>
    <img src="https://source.unsplash.com/random/400x200" alt="unsplash-source"/>
  </div>
)

export default IndexPage
