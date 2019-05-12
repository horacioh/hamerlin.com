import React from "react"
import styled from "styled-components"
import { Box, Flex, Text } from "rebass"
import { space } from "styled-system"
import { Logo, BgImage } from "./Image"

const Header = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`

const CustomText = (props) => <Text as="p" textAlign="center" width={1} {...props} />

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightgray};
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: hsla(198, 82%, 55%, 1);
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
  ${space};
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
      <CustomText>pronto online!</CustomText>
      <CustomText>
        <ExternalLink href="tel:+5072215220" mr={2}>
          221-5220
        </ExternalLink>
        |
        <ExternalLink href="tel:+5079960671" ml={2}>
          996-0671
        </ExternalLink>
      </CustomText>
      <CustomText>
        <ExternalLink href="https://wa.me/50760308417" mr={2}>
          Whatsapp
        </ExternalLink>
        |
        <ExternalLink href="mailto:ventas@hamerlin.com" ml={2}>
          Email
        </ExternalLink>
      </CustomText>
    </Header>
  </BgImage>
)
