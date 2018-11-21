import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Contact = ({ data }) => (
  <Layout>
    <h1 style={{ margin: '15px 0' }}>{data.allAboutJson.edges[2].node.title}</h1>
    <div className="row">
      <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="col s12"
      >
        <input placeholder="Name" id="name" type="text" className="validate" />
        <input placeholder="Email" id="email" type="email" className="validate" />
        <textarea placeholder="Hello" id="textarea1" class="materialize-textarea" />
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
