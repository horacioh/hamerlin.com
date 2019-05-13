import React from "react"
import styled from "styled-components"
import { Flex } from "rebass"
import { Logo, BgImage } from "./Image"
import { Box } from './Box'
import { Footer } from './Footer'

const Header = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`

export default () => (
  <BgImage>
    <Header
      alignItems="center"
      flexDirection="column"
      py={4}
      px={2}
      color="white"
      justifyContent="center"
    >
      <Box mb={4}>
        <Logo />
      </Box>
      <Footer />
    </Header>
  </BgImage>
)
