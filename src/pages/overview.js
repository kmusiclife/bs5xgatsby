import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Overview = () => (
  <Layout>
    <Seo title="Overview" />
    <div className="hero sm"></div>
    <div className="container py-5 text-center">
        <h1 className="pb-3">Overview Page</h1>
        <p>Bootstrap5 x Gatsby</p>
        <p><Link to="https://kmusiclife.github.com/bs5xgatsby" target="_blank" role="nofollow">Bootstrap5 x Gatsby on github</Link></p>
    </div>
  </Layout>
)

export default Overview
