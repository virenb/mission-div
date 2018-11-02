import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const About = ({ data }) => (
  <Layout>
    <h1>{data.allAboutJson.edges[0].node.title}</h1>
    <p>{data.allAboutJson.edges[0].node.main}</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/services">Services</Link>
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
