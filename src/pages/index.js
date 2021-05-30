import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroLogoImage from "../images/logo-white.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero">
      <div>
          <h1><img src={HeroLogoImage} /></h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
