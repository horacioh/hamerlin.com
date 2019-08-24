const React = require("react")
const { Global, css } = require("@emotion/core")


exports.wrapRootElement = ({ element }) => {
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
