const React = require("react")
const Amplify = require('aws-amplify');
const { Global, css } = require("@emotion/core");



exports.onClientEntry = () => {
  Amplify.default.configure({
    aws_project_region: "eu-west-1",
    aws_appsync_graphqlEndpoint: process.env.AMPLIFY_GRAPHQL_ENDPOINT,
    aws_appsync_region: "eu-west-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: process.env.AMPLIFY_API_KEY
  })
}


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
