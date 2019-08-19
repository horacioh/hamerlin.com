import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const Logo = props => (
  <svg width="250px" viewBox="0 0 292 62" {...props}>
    <title>Fumigadora Hamerlin Logo</title>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#00AEEF"
        d="M22.096.045H12.062L.685 5.92l3.166 7.208 5.894-2.774.19-.09-4.452 24.338h10.528l2.424-13.822h.018l1.52-8.64h-.004L22.096.045"
      />
      <path
        fill="#DAEEE8"
        d="M32.285.045L29.57 14.713h-9.69l8.157 8.64-1.836 11.25h10.536L42.82.044H32.285M66.698 29.37H56.261l-2.374 5.232H41.72L60.367.045H71.99l6.43 34.557H67.242l-.544-5.233zm-6.727-8.146h5.836L64.72 10.758l-4.748 10.466zM113.243 17.67l-7.37 11.157h-5.392l-3.413-12.342-3.166 18.117H83.367L89.451.045h10.684l4.65 17.033L116.21.045h10.684l-6.084 34.557h-10.536l2.968-16.933M128.234 34.602L134.27.045h26.66l-1.533 8.837H143.32l-.742 4.098h12.96l-1.485 8.639h-13.008l-.742 4.147h16.076l-1.534 8.836h-26.612M178.033 22.458h-3.067l-2.177 12.144h-10.535L168.337.045h15.78c10.09 0 14.393 3.653 14.393 10.12 0 3.9-2.324 10.566-10.288 11.997l5.935 12.44h-10.782l-5.342-12.144zm5.095-14.317h-5.59l-1.236 6.221h6.084c3.462 0 5.292-1.481 5.292-3.9 0-2.073-2.078-2.32-4.55-2.32zM201.677 34.602L207.76.045h10.536l-4.65 25.919h15.482l-1.385 8.638h-26.067M235.22 34.602L241.303.045h10.537l-6.084 34.557H235.22M267.045 15.596l-3.314 19.006h-10.536L259.28.045h10.635l7.518 18.957L280.796.045h10.536l-6.084 34.557h-10.635l-7.568-19.006"
      />
      <text
        fontFamily="VerbRegular-BoldItalic, Verb"
        fontSize={15.506}
        fontStyle="italic"
        fontWeight="bold"
        fill="#9E9F9E"
      >
        <tspan x={172.402} y={60.414}>
          {'PES'}
        </tspan>
        <tspan x={202.127} y={60.414} letterSpacing={-0.627}>
          {'T'}
        </tspan>
        <tspan x={210.262} y={60.414} />
        <tspan x={214.464} y={60.414} letterSpacing={-0.351}>
          {'C'}
        </tspan>
        <tspan x={224.053} y={60.414}>
          {'ONTROL'}
        </tspan>
      </text>
    </g>
  </svg>
)

export const BgImage = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hamerlin_hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      console.log('rendrrr')
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          // Title get's passed to both container and noscriptImg.
          title="Man working outdoors"
          fadeIn="soft"
          role="img"
          aria-label="Man working outdoors"
          style={{
            height: "100%",
            position: "absolute",
            width: "100%",
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)
