import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Access = () => (
  <Layout>
    <Seo title="Access" />
    <div className="hero sm"></div>
    <div className="container py-5 text-center">
        <h1 className="pb-3">Access Page</h1>
        <p>Bootstrap5 x Gatsby</p>
        <p><Link to="https://github.com/kmusiclife/bs5xgatsby" target="_blank" role="nofollow">Bootstrap5 x Gatsby on github</Link></p>
    </div>
  </Layout>
)

export default Access
