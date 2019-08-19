/** @jsx jsx */
import { jsx } from "theme-ui"
import { Global, css } from "@emotion/core"
// example Container component
import 'typeface-montserrat';

export default function Container({ children, sx, ...rest }) {
  return (
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        px: 3,
        ...sx,
      }}
      {...rest}
    >
      <Global styles={css`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #fafafa;
        }
      `}
      />
      {children}
    </div>
  )
}
