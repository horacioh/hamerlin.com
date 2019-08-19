/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Container from "./Container"

function MainMenu() {
  return null
}

export const fragment = graphql`
  fragment ImageAndTextSection on Wordpress_Page_Pagesections_Sections_ImageAndText {
    title
    imagePosition
    text
    image {
      sourceUrl
    }
  }
`

export default function Hero({ title, text, image }) {
  return (
    <div
      sx={{
        minHeight: "100vh",
        bg: "yellow",
      }}
    >
      <MainMenu />
      <Container sx={{
            display: 'flex',
            bg: "tomato",
          }}>
        <div
          sx={{
            width: ['100%', '50%']
          }}
        >
          <Styled.h1>{title}</Styled.h1>
          <Styled.p>{text}</Styled.p>
        </div>
      </Container>
    </div>
  )
}
