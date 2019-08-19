import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import ImageAndText from "../components/ImageAndText"

export const PageQuery = graphql`
  {
    wordpress {
      pageBy(uri: "home") {
        pageSections {
          sections {
            __typename
            ...HeroSection
            ...ImageAndTextSection
          }
        }
      }
    }
  }
`

export default function Home({ data }) {
  const sections = data.wordpress.pageBy.pageSections.sections
  return (
    <div>
      {sections.map(section => {
        const typeName = section.__typename

        switch (typeName) {
          case "Wordpress_Page_Pagesections_Sections_Hero":
            // TODO: AGREGAR key
            return <Hero {...section} />

          case "Wordpress_Page_Pagesections_Sections_ImageAndText":
            return <ImageAndText {...section} />

          default:
            return <p>No hay secciones que pintar :(</p>
        }
      })}
    </div>
  )
}
