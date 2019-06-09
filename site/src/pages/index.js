import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/Seo"
import HeroHeader from '../components/HeroHeader'

const IndexPage = () => (
    <Layout>
      <Seo
        title="Inicio"
        keywords={[`fumigadora`, `hamerlin`, `control de plagas`]}
      />
      <HeroHeader />
    </Layout>
)

export default IndexPage
