/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Flex, Styled } from "theme-ui"
import Container from "./Container"

export const fragment = graphql`
  fragment ServiceCardsSection on Wordpress_Page_Pagesections_Sections_Services {
    services {
      title
      description
      image {
        sourceUrl
      }
    }
  }
`

export default function ServiceCardsSection({ services }) {
  return (
      <Container sx={{overflow: 'auto', py: 5}}>
        <Flex sx={{
          mx: -3,
          flexDirection: ['column', 'column', 'row'],
          overflow: 'auto'
        }}>
          {services.map(service => (
            <ServiceItem {...service} />
          ))}
        </Flex>
      </Container>
  )
}

function ServiceItem({ title, description, image }) {

  return (
    <Flex sx={{
      flexDirection: 'column',
      mx: 3,
      flex: 1,
      bg: 'white',
      boxShadow: "0 0 40px 0 rgba(0,0,0,0.05)",
      borderRadius: 12,
      overflow: 'hidden',
      mb: 4
    }}>

      <img src={image.sourceUrl} sx={{
        width: '100%',
        display: 'block',
        objectFit: 'cover',
        height: 200,
      }} />
      <div sx={{px: 4, pb: 4}}>
      <Styled.h3>{title}</Styled.h3>
      <Styled.p>{description}</Styled.p>
      </div>
    </Flex>
  )
}
