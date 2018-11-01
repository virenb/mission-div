import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const About = ({ data }) => (
  <Layout>
    <h1>{data.aboutJson.title}</h1>
    <p>{data.aboutJson.main}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query AboutPage {
    aboutJson {
      title
      main
    }
  }
`

export default About

