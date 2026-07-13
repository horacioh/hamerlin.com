import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/Seo"
import HeroHeader from "../components/HeroHeader"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fumigadora Hamerlin, S.A.",
  image:
    "https://www.hamerlin.com/static/9b21fcca9af702f371e6781da3b5197d/c4f3a/hamerlin_hero.jpg",
  url: "https://www.hamerlin.com",
  telephone: "+507-221-5220",
  email: "mailto:ventas@hamerlin.com",
  description:
    "Empresa panameña de control de plagas con más de 40 años de experiencia. Servicios de fumigación residencial y comercial, control de comején, roedores, insectos rastreros y voladores. Certificados MINSA.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Primera, Concepción",
    addressLocality: "Juan Díaz, Ciudad de Panamá",
    addressCountry: "PA",
  },
  areaServed: "Ciudad de Panamá",
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-17:00",
}

const IndexPage = () => (
  <Layout>
    <Seo
      title="Inicio"
      keywords={[`fumigadora`, `hamerlin`, `control de plagas`]}
      jsonLd={jsonLd}
    />
    <HeroHeader />
  </Layout>
)

export default IndexPage
