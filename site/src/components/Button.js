/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "./Link"

export function ButtonLink({
  variant = "outline",
  onClick,
  to,
  disabled,
  type = 'button',
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
        borderColor: "currentColor",
        fontFamily: 'heading',
        fontWeight: 'heading',
        py: 2,
        px: 3,
        borderRadius: 1,
        textDecoration: "none",
        // "&.active": {
        //   color: "secondary",
        // },

      }}
      {...rest}
    />
  )
}

export function Button({
  variant = "outline",
  sx,
  onClick,
  to,
  disabled,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      activeClassName="active"
      sx={{
        color: "inherit",
        variant: `buttons.${variant}`,
        border: "2px solid",
        borderColor: "primary",
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: 'heading',
        py: 2,
        px: 3,
        borderRadius: 1,
        textDecoration: "none",
      }}
      {...rest}
    />
  )
}
