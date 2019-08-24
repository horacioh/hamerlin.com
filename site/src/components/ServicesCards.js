/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Container from "./Container"

// export const fragment = graphql`
//   fragment ServiceCardsSection on Wordpress_Page_Pagesections_Sections_Services {
//     services {
//       title
//       text
//       image {
//         sourceUrl
//       }
//     }
//   }
// `

export default function ServiceCardsSection({ services }) {
  return (
    <Flex>
      <Container>
        {/* {services.map(service => (
          // <ServiceItem {...service} />
        ))} */}
      </Container>
    </Flex>
  )
}

function ServiceItem({ title, text, image }) {
  return (
    <div>
      <img src={image.sourceUrl} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
