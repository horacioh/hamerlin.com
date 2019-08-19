export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Montserrat", sans-serif',
  },
  colors: {
    text: "#9e9e9e",
    background: "#fafafa",
    primary: "#1A2451",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: [0, 3],
  text: {
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "text",
    },
  },
  sizes: {
    container: 1280,
  },
  buttons: {
    primary: {
      color: "white",
      textTransform: "uppercase",
      fontFamily: "heading",
    },
    outline: {
      color: "primary",
      textTransform: "uppercase",
      fontFamily: "heading",
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      color: "text",
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    a: {
      fontFamily: "body",
    },
    ul: {
      p: 0,
      m: 0,
    }
  },
}
