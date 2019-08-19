/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default function Button({
  variant = "outline",
  sx,
  onClick,
  to,
  ...rest
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeClassName="active"
      sx={{
        color: "inherit",
        variant: `buttons.${variant}`,
        border: "2px solid",
        borderColor: "primary",
        fontFamily: 'heading',
        fontWeight: 'heading',
        py: 2,
        px: 3,
        borderRadius: 1,
        textDecoration: "none",
        // "&.active": {
        //   color: "secondary",
        // },
        ...sx,
      }}
      {...rest}
    />
  )
}
