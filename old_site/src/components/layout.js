import React from "react"
import { Box } from './Box'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../utils/theme"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box>
      <GlobalStyles />
      {children}
    </Box>
  </ThemeProvider>
)

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
