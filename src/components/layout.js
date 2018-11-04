import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import Header from './header'
import AppFooter from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="site-content">{children}</div>
          <AppFooter />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

