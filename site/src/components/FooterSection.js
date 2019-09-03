/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import Container from "./Container"
import Logo from "./logo"

export default function FooterSection() {
  return (
    <footer sx={{ position: "relative" }}>
      <div
        sx={{
          position: "absolute",
          bottom: "95%",
          right: 0,
          width: "100%",
          svg: {
            m: 0,
            p: 0,
          },
        }}
      >
        {/* celeste */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1365 260">
          <path
            fill="#E8ECFE"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
            d="M0 259.56c139.59.009 240.916.009 303.978 0C636.487 259.519 875.011 130.087 1040 35.375c224.578-128.919 399.25 128.92 400 224.187-76.341-.099-732.126-.032-1136.022 0-101.625.008-202.951.008-303.978 0z"
            transform="translate(-75 -3659) translate(0 3659)"
          />
        </svg>
      </div>
      <div
        sx={{
          position: "absolute",
          bottom: "94%",
          right: 0,
          width: "100%",
          svg: {
            m: 0,
            p: 0,
          },
        }}
      >
        {/* azul */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 198">
          <path
            fill="#1A2451"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
            d="M.75 259.425C359.122 259.425 891.576 62 1171.659 62c186.722 0 275.997 65.808 267.827 197.425H.75z"
            transform="translate(-1 -3721) translate(0 3659)"
          />
        </svg>
      </div>
      <div sx={{ bg: "primary" }}>
        <Container>
          <Flex
            sx={{
              flexDirection: ["column", "row"],
              py: 3,
              alignItems: "center",
            }}
          >
            <Flex sx={{ flex: 1, flexBasis: 1, py: 3 }}>
              <Styled.p sx={{ color: "body", fontSize: [0, 0] }}>
                Fumigadora Hamerlin, S.A. — Chanis casa 255 A, Panamá
              </Styled.p>
            </Flex>
            <Flex
              sx={{
                flex: 1,
                flexBasis: 1,
                justifyContent: ["center", "flex-end"],
                py: 3,
              }}
            >
              <Logo small />
            </Flex>
          </Flex>
        </Container>
      </div>
    </footer>
  )
}
