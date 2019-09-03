/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "./Container"
import MainMenu from "./MainMenu"
import { ButtonLink } from "./Button"
import IconButton from "./IconButton"
import * as Icons from "./Icons"

export const fragment = graphql`
  fragment HeroSection on Wordpress_Page_Pagesections_Sections_Hero {
    title
    text
  }
`

export default function Hero({ title, text, image }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          social {
            facebook
            instagram
            whatsapp
          }
        }
      }

      file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { facebook, instagram, whatsapp } = data.site.siteMetadata.social

  return (
    <Flex
      sx={{
        height: "100vh",
        minHeight: 900,
        maxHeight: 1400,
        flexDirection: "column",
        position: "relative",
        width: '100vw',
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
            left: "40%",
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
            left: ["30%", "40%"],
            height: "100vh",
            maxHeight: 900,
            width: "80%",
            right: 0,
            maxWidth: 1450,
          }}
        >
          <Img
            fluid={data.file.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain", maxHeight: 900 }}
          />
        </div>
      </div>
      <MainMenu facebook={facebook} instagram={instagram} whatsapp={whatsapp} />
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
            pt: [150, 0],
            width: ["100%", "40%"],
            zIndex: 10,
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.p sx={{mb: 4}}>{text}</Styled.p>
          <ButtonLink sx={{mb: 3, display: ["inline-block", "none"]}} to="#contacto" variant="outline">
              Contactanos
            </ButtonLink>
          <Flex sx={{alignItems: "center", display: ["flex", "none"] }}>
            <IconButton
              to={`https://wa.me/${whatsapp}`}
              icon={<Icons.Whatsapp />}
            />
            <IconButton
              to={`https://instagram.com/${instagram}`}
              icon={<Icons.Instagram />}
            />
            <IconButton
              to={`https://facebook.com/${facebook}`}
              icon={<Icons.Facebook />}
            />
          </Flex>
        </div>
      </Container>
    </Flex>
  )
}
