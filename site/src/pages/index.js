import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import Hero from "../components/Hero"
import ImageLeftAndText from "../components/ImageLeftAndText"
import AboutSection from "../components/AboutSection";
import ServiceCardsSection from "../components/ServicesCards";
import ContactSection from '../components/ContactSection';

export const PageQuery = graphql`
  {
    wordpress {
      pageBy(uri: "home") {
        pageSections {
          sections {
            __typename
            ...HeroSection
            ...ImageLeftAndTextSection
            ...AboutSection
            ...OnContactSection
            ...ServiceCardsSection
          }
        }
      }
    }
  }
`

export default function Home({ data }) {
  const sections = data.wordpress.pageBy.pageSections.sections
  return (
    <Layout>
      {sections.map(section => {
        const typeName = section.__typename

        switch (typeName) {
          case "Wordpress_Page_Pagesections_Sections_Hero":
            // TODO: AGREGAR key
            return <Hero {...section} />

          case "Wordpress_Page_Pagesections_Sections_ImageLeftAndText":
            return <ImageLeftAndText {...section} />

          case "Wordpress_Page_Pagesections_Sections_Services":
                return <ServiceCardsSection {...section} />

          case "Wordpress_Page_Pagesections_Sections_AboutSection":
            return <AboutSection {...section} />

          case "Wordpress_Page_Pagesections_Sections_ContactSection":
            return <ContactSection {...section} />

          default:
            return <p>Algo sali&oacute; mal :(</p>
        }
      })}
    </Layout>
  )
}
