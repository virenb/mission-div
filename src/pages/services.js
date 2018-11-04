import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Services = ({ data }) => (
  <Layout>
    <h1>{data.allAboutJson.edges[2].node.title}</h1>
    <p>
      {data.allAboutJson.edges[2].node.positions.map(position => (<li key={position}>{position}</li>))}
    </p>
  </Layout>
);

export const query = graphql`
  query ServicesPage {
     allAboutJson {
      edges {
        node {
          title
          positions
        }
      }
    }
  }
`;

export default Services;
