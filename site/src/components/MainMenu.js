/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Container from "./Container"
import { Button, ButtonLink } from "./Button"
import Logo from "./logo"
import * as Icons from "./Icons"

function IconButton({ icon, ...rest }) {
  return (
    <ButtonLink
      sx={{
        bg: 'transparent',
        border: 0,
        borderRadius: 1,
        fontFamily: "heading",
        cursor: "pointer",
        m: 0,
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
          <Flex sx={{alignItems: 'center'}}>
            <IconButton icon={<Icons.Whatsapp />} />
            <IconButton icon={<Icons.Instagram />} />
            <IconButton icon={<Icons.Facebook />} />
            <ButtonLink variant="buttons.outline">Contactanos</ButtonLink>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
