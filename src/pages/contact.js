import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Contact = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[2].node.title}</h1>
    <div className="row">
      <form 
        name="contact" 
        method="POST"
        className="col s12"
        netlify
      >
        <input placeholder="Name" id="name" name="name" type="text" className="validate" />
        <input placeholder="Email" id="email" name="email" type="email" className="validate" />
        <textarea placeholder="Hello" id="textarea1" name="message" class="materialize-textarea" />
        <button 
          style={{ backgroundColor: 'navy' }} 
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
        </button>    
      </form>
    </div>    
  </Layout>
)

export const query = graphql`
  query ContactPage {
     allAboutJson {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default Contact;
