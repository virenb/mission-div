import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <p>Welcome to contact page</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/about">Go back to the about</Link>
  </Layout>
)

export default Contact
