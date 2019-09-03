/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { ButtonLink } from "./Button"

export default function IconButton({ icon, color = 'primary', ...rest }) {
  return (
    <ButtonLink
      sx={{
        bg: "transparent",
        border: 0,
        borderRadius: 1,
        fontFamily: "heading",
        cursor: "pointer",
        m: 0,
        color,
        p: 0,
        mr: 3,
        px: 1,
      }}
      {...rest}
    >
      {icon}
    </ButtonLink>
  )
}
