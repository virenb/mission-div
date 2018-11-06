import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const About = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[0].node.title}</h1>
    <p>{data.allAboutJson.edges[0].node.main}</p>
  </Layout>
);

export const query = graphql`
  query AboutPage {
     allAboutJson {
      edges {
        node {
          title
          main
        }
      }
    }
  }
`;

export default About;
