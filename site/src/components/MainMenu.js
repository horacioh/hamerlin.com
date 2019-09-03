/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Container from "./Container"
import { ButtonLink } from "./Button"
import Logo from "./logo"
import IconButton from './IconButton';
import * as Icons from "./Icons"


export default function MainMenu({ whatsapp, instagram, facebook, ...rest }) {

  return (
    <div
      sx={{ py: 4, position: "absolute", top: 0, zIndex: 10, width: "100%" }}
      {...rest}
    >
      <Container>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Logo />
          <Flex sx={{ alignItems: "center", display: ['none', 'flex'] }}>
            {whatsapp && <IconButton color="white" to={`https://wa.me/${whatsapp}`} icon={<Icons.Whatsapp />} />}
            {instagram && <IconButton color="white" to={`https://instagram.com/${instagram}`} icon={<Icons.Instagram />} />}
            {facebook && <IconButton color="white" to={`https://facebook.com/${facebook}`} icon={<Icons.Facebook />} />}
            <ButtonLink to="#contacto" variant="primary" sx={{ display: ['none', 'block']}}>
              Contactanos
            </ButtonLink>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
