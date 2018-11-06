import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Contact = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[1].node.title}</h1>
    <p>{data.allAboutJson.edges[1].node.main}</p>
  </Layout>
)

export const query = graphql`
  query ContactPage {
     allAboutJson {
      edges {
        node {
          title
          main
        }
      }
    }
  }
`

export default Contact
