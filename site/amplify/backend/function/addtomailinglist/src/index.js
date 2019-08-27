/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiHamerlinapiGraphQLAPIIdOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIIDOUTPUT
var apiHamerlinapiGraphQLAPIEndpointOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = function (event, context) { //eslint-disable-line
  var environment = process.env.ENV
  var apiHamerlinapiGraphQLAPIIdOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIIDOUTPUT
  var apiHamerlinapiGraphQLAPIEndpointOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIENDPOINTOUTPUT
  console.log("TCL: exports.handler -> environment", environment)
  console.log("TCL: exports.handler -> apiHamerlinapiGraphQLAPIIdOutput", apiHamerlinapiGraphQLAPIIdOutput)
  console.log("TCL: exports.handler -> apiHamerlinapiGraphQLAPIEndpointOutput", apiHamerlinapiGraphQLAPIEndpointOutput)

  console.log(`value1 = ${event.key1}`);
  console.log(`value2 = ${event.key2}`);
  console.log(`value3 = ${event.key3}`);
  context.done(null, 'Hello World'); // SUCCESS with message
};
