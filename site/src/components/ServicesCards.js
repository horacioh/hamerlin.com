/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Flex } from "theme-ui"
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
    <Flex>
      <Container>
        {services.map(service => (
          <ServiceItem {...service} />
        ))}
      </Container>
    </Flex>
  )
}

function ServiceItem({ title, description, image }) {

  console.log("TCL: ServiceItem -> title, description, image", title, description, image)

  return (
    <div>
      <img src={image.sourceUrl} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
