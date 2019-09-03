import React from 'react'
import { Link as GatsbyLink } from "gatsby"

// component from Gatsby docs:
// https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links

export default function Link({ children, to, activeClassName, partiallyActive, ...other }) {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  )
}
