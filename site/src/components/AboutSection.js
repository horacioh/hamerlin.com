/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Container from "./Container"

function Arc({ rotate = false, ...rest }) {
  return (
    <div
      sx={{
        width: "100%",
        position: "absolute",
        height: "auto",
        [rotate ? "bottom" : "top"]: -8,
        left: 0,
        right: 0,
        transform: rotate ? "none" : "rotate(180deg)",
        // zIndex: rotate ? -1 : 0,
        zIndex: 0,
      }}
      {...rest}
    >
      <svg viewBox="0 0 1440 160">
        <g>
          <path
            fill={`#fafafa`} //TODO: pull color from theme-ui
            d="M0,160 L0,0 C548.949848,3.38469e-14 823.425766,157.977 1440,157.977 L1440,160 L0,160 Z"
            transform="matrix(-1 0 0 1 1440 0)"
          ></path>
        </g>
      </svg>
    </div>
  )
}

export const fragment = graphql`
  fragment AboutSection on Wordpress_Page_Pagesections_Sections_AboutSection {
    title
    text
    image {
      sourceUrl
    }
  }
`

export default function AboutSection({ title, text, image }) {
  return (
    <Flex
      sx={{
        bg: "primaryBg",
        pt: 100,
        pb: 120,
        position: "relative",
        mb: 7,
      }}
    >
      <Arc />
      <Arc rotate />
      <Container sx={{ transform: "translateY(40px)" }}>
        <Flex sx={{ flexDirection: ["column-reverse", "row"] }}>
          <Flex
            sx={{
              zIndex: 1,
              width: ["100%", "50%"],
              flexDirection: "column",
              justifyContent: "center",
              my: 4,
            }}
          >
            <Styled.h2>{title}</Styled.h2>
            <Styled.p>{text}</Styled.p>
          </Flex>
          <Flex sx={{ flex: 1 }}>
            <div
              sx={{
                width: "100%",
                paddingBottom: "90%",
                position: "relative",
                ml: [0, "10%"],
              }}
            >
              <div
                sx={{
                  backgroundImage: `url(${image.sourceUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  borderRadius: 16,
                  zIndex: 5,
                  boxShadow: "0 4px 80px 0 rgba(0,0,0,0.10)",
                  //background-image: linear-gradient(127deg, rgba(47,61,114,0.40) 29%, #212B55 72%, #151D3E 89%);
                }}
              />
            </div>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
