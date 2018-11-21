import React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-materialize';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[0].node.title}</h1>
    <Row>
      <Col s={12}>
        <p>{data.allAboutJson.edges[0].node.main}</p>
      </Col>
    </Row>
  </Layout>
);

export const query = graphql`
  query IndexPage {
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



export default IndexPage;

