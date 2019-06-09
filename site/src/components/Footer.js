import React from "react"
import styled from "styled-components"
import { space } from "styled-system"
import { Flex } from "rebass"
import { Box } from './Box'
import { Text } from './Text'

const ContactBox = props => <Box p={2} m={3}  {...props} />

const Label = props => (
  <Text mb={2} textAlign="center" color="gray" fontSize={3} {...props} />
)

const ContactValue = props => (
  <Text textAlign="center" fontSize={4} {...props} />
)

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightgray};
  position: relative;
  word-break: keep-all;
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

export const Footer = () => (
  <Flex flexDirection={["column", "column", "row"]}>
    <ContactBox>
      <Label>
        Ll&aacute;manos!
        <Text as="span" aria-label="Thelephone emoji" ml={2}>
          ☎️
        </Text>
      </Label>
      <ContactValue>
        <ExternalLink href="tel:+5072215220" mr={2}>
          221-5220
        </ExternalLink>
        |
        <ExternalLink href="tel:+5079960671" ml={2}>
          996-0671
        </ExternalLink>
      </ContactValue>
    </ContactBox>
    <ContactBox>
      <Label>
        M&aacute;ndanos un Whatsapp!
        <Text as="span" aria-label="Message Bubble" ml={2}>
          💬
        </Text>
      </Label>
      <ContactValue>
        <ExternalLink href="https://wa.me/50760308417">
          +507 6030-8417
        </ExternalLink>
      </ContactValue>
    </ContactBox>
    <ContactBox>
      <Label>
        Escribenos un Email
        <Text as="span" aria-label="Electronic email emoji" ml={2}>
          📬
        </Text>
      </Label>
      <ContactValue>
        <ExternalLink href="mailto:ventas@hamerlin.com">
          ventas@hamerlin.com
        </ExternalLink>
      </ContactValue>
    </ContactBox>
  </Flex>
)
