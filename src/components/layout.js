/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import bootstrap from 'bootstrap'
import "../scss/main.scss"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const[offset, setOffset] = useState(0)
  useEffect(() => {
    if (typeof window !== `undefined`) {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }
  }, []);

  return (
    <>
      <Header offset={offset} siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
