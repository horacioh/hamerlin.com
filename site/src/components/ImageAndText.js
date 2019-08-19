/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { graphql } from "gatsby"
import Container from "./Container"
import MainMenu from "./MainMenu"

export const fragment = graphql`
  fragment ImageAndTextSection on Wordpress_Page_Pagesections_Sections_ImageAndText {
    title
    imagePosition
    text
    image {
      sourceUrl
    }
  }
`

export default function Hero({ title, text, image, imagePosition }) {
  console.log("TCL: Hero -> image", image)

  const dir = imagePosition == "left" ? "row" : "row-reverse"
  return (
    <Flex sx={{ py: 3 }}>
      <Container>
        <Flex sx={{ flexDirection: ["column", "row"] }}>
          <Flex sx={{ flex: 1 }}>
            <div
              sx={{
                bg: "#cdcdcd",
                width: ["100%", "90%"],
                mx: ["auto", 0],
                paddingBottom: "90%",
                position: "relative",
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
                  boxShadow: "0 4px 80px 0 rgba(0,0,0,0.10)"
                  //background-image: linear-gradient(127deg, rgba(47,61,114,0.40) 29%, #212B55 72%, #151D3E 89%);
                }}
              />
              <svg
                viewBox="0 0 726 780"
                sx={{
                  width: "100%",
                  height: "100%",
                  transform: "scale(1.4)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              >
                <path
                  d="M357.777 0c135.012 0 93.094 189.97 152.147 281.722 174.725 150.574 249.769 249.534 201.934 381.095-47.834 131.561-251.499 146.244-395.2 74.432-103.01-51.476-72.406-195.216-136.85-340.506C135.624 297.126-4 333.958-4 194.613S222.764 0 357.777 0z"
                  fill="#EEEEF8"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </Flex>
          <Flex
            sx={{
              zIndex: 1,
              width: ["100%", "50%"],
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Styled.h2>{title}</Styled.h2>
            <Styled.p>{text}</Styled.p>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
