/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Container from "./Container"
import MainMenu from "./MainMenu"

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
  // const heroImage = useStaticQuery(graphql`
  //   {
  //     file(name: { eq: "hero-image" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Flex
      sx={{
        height: "100vh",
        minHeight: 700,
        maxHeight: 1400,
        flexDirection: "column",
        position: "relative",
        // TODO: bug scroll horizontal
      }}
    >
      <Container sx={{ position: "relative", width: "100%", zIndex: 0 }}>
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
      </Container>
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
        </div>
      </Container>
    </Flex>
  )
}
