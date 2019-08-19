/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Container from './Container'
import Button from './Button'
import Logo from './logo'

export default function MainMenu() {
  return (
    <div sx={{py:4}}>
      <Container>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
          <Logo />
          {/* <nav role="navigation" aria-label="Main">
            <ul>
              <li></li>
            </ul>
          </nav> */}
          <Button variant="buttons.outline">Contactanos</Button>
        </Flex>
      </Container>
    </div>

  )
}
