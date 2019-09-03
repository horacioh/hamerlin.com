/** @jsx jsx */
import { jsx } from "theme-ui"
// example Container component
import 'typeface-montserrat';

export default function Container({ children, ...rest }) {
  return (
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        px: 3
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
