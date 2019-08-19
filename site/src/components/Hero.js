/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "./Container"
import * as Icons from "./Icons"

function MainMenu() {
  return null
}

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
          pt: ['60%', 0]
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
        {/* svg background shape */}
        <svg
          viewBox="0 0 1454 894"
          sx={{
            position: "absolute",
            zIndex: 0,
            height: '100%',

            top: 0,
            right: 0,
            transform: [
              "translateX(30%)",
              "translateX(40%)",
              "translateX(50%)",
            ],
          }}
        >
          <path
            d="M2.733 0C-39.715 422.845 622 893.163 888 893.163S1453.205 342 1453.205 0H2.733z"
            fill="#EEEEF8"
            fillRule="evenodd"
          />
        </svg>
        <div sx={{ position: "absolute", right: 0, top: 0, zIndex: 5, width: '100%', maxWidth: 890, height: '100%', transform: ['translateX(20%)', 'translateX(30%)', 'translateX(40%)'] }}>
          <Img fluid={heroImage.file.childImageSharp.fluid} />
        </div>
      </Container>
    </Flex>
  )
}
