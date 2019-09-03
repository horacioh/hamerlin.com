/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "./Container"
import MainMenu from "./MainMenu"

export const fragment = graphql`
  fragment HeroSection on Wordpress_Page_Pagesections_Sections_Hero {
    title
    text
  }
`

export default function Hero({ title, text, image }) {
  const heroImage = useStaticQuery(graphql`
    query HeroImage {
      file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
        minHeight: 700,
        maxHeight: 1400,
        flexDirection: "column",
        position: "relative",
        overflow: 'hidden'
      }}
    >
      <div
        sx={{ position: "absolute", width: "100%", zIndex: 0, height: "100%" }}
      >
        {/* primaryBg shape */}
        <div
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            height: "100%",
            width: "100%",
            maxWidth: 1450,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1450 894">
            <path
              fill="#EEEEF8"
              fillRule="evenodd"
              stroke="none"
              strokeWidth="1"
              d="M1.947 0c-42.378 423.24 618.234 894 883.79 894C1151.295 894 1450 342.32 1450 0H1.947z"
            />
          </svg>
        </div>
        {/* imagen */}
        <div
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "40%",
            height: "90%",
            maxHeight: 700,
            width: "80%",
            right: 0,
            maxWidth: 1450,
            maxHeight: '100%',
          }}
        >
          <Img fluid={heroImage.file.childImageSharp.fluid} imgStyle={{objectFit: 'contain', maxHeight: 900}} />
        </div>
      </div>
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
            width: ["100%", "40%"],
            zIndex: 10,
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.p>{text}</Styled.p>
        </div>
      </Container>
    </Flex>
  )
}
