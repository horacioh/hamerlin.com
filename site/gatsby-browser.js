import React from 'react'
import { Global, css } from "@emotion/core"

export function wrapRootElement({ element }) {
  return (
    <React.Fragment>
      <Global styles={css`
        html, body {
          margin: 0;
          padding: 0;
          background-color: #fafafa;
        }

        * {
          box-sizing: border-box;
        }
      `}
      />
      {element}
    </React.Fragment>
  )
}
