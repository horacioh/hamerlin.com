/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "./Container"
import MainMenu from './MainMenu'
import * as Icons from "./Icons"

function IconButton({ icon, ...rest }) {
  return (
    <button
      sx={{
        border: 0,
        borderRadius: 1,
        fontFamily: "heading",
        cursor: "pointer",
      }}
      {...rest}
    >
      {icon}
    </button>
  )
}

export const fragment = graphql`
  fragment HeroSection on Wordpress_Page_Pagesections_Sections_Hero {
    title
    text
    image {
      sourceUrl
    }
  }
`

export default function Hero({ title, text, image }) {
  const heroImage = useStaticQuery(graphql`
    {
      file(name: { eq: "hero-image" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Flex
      sx={{
        height: "100vh",
        maxHeight: 900,
        flexDirection: 'column',
        // overflowX: 'hidden',
        // overflowY: 'visible'
        position: 'relative'
      }}
    >
      <MainMenu />
      <Container
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          sx={{
            width: ["100%", "50%"],
            zIndex: 10,

          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.p>{text}</Styled.p>
          <IconButton icon={<Icons.Whatsapp />} />
          <IconButton icon={<Icons.Instagram />} />
          <IconButton icon={<Icons.Facebook />} />
        </div>
      </Container>
    </Flex>
  )
}
