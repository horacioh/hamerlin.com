/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Container from "./Container"
import { ButtonLink } from "./Button"
import Logo from "./logo"
import * as Icons from "./Icons"

function IconButton({ icon, ...rest }) {
  return (
    <ButtonLink
      sx={{
        bg: "transparent",
        border: 0,
        borderRadius: 1,
        fontFamily: "heading",
        cursor: "pointer",
        m: 0,
        color: "white",
        p: 0,
        mr: 3,
        px: 1,
      }}
      {...rest}
    >
      {icon}
    </ButtonLink>
  )
}

export default function MainMenu(props) {
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
    }
  `)

    const { facebook, instagram, whatsapp } = data.site.siteMetadata.social
  return (
    <div
      sx={{ py: 4, position: "absolute", top: 0, zIndex: 10, width: "100%" }}
      {...props}
    >
      <Container>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Logo />
          {/* <nav role="navigation" aria-label="Main">
            <ul>
              <li></li>
            </ul>
          </nav> */}
          <Flex sx={{ alignItems: "center" }}>
            <IconButton to={`https://wa.me/${whatsapp}`} icon={<Icons.Whatsapp />} />
            <IconButton to={`https://instagram.com/${instagram}`} icon={<Icons.Instagram />} />
            <IconButton to={`https://facebook.com/${facebook}`} icon={<Icons.Facebook />} />
            <ButtonLink to="#contacto" variant="primary" sx={{ display: ['none', 'block']}}>
              Contactanos
            </ButtonLink>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
