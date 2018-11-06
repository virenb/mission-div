import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col, CardPanel } from 'react-materialize';

import Layout from '../components/layout';

const Services = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[2].node.title}</h1>
    <Row>
      {data.allAboutJson.edges[2].node.positions.map(position => (
        <Col s={4}>
          <CardPanel className="indigo darken-4 white-text center-align">
            <p style={{ fontSize: '1.2rem', marginTop: '25px' }} key={position}>{position}</p>
          </CardPanel>
        </Col>
        ))}
    </Row>
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
