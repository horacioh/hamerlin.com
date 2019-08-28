/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiHamerlinapiGraphQLAPIIdOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIIDOUTPUT
var apiHamerlinapiGraphQLAPIEndpointOutput = process.env.API_HAMERLINAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const axios = require('axios').default;

exports.handler = function (event, context) { //eslint-disable-line

  const { email, fullname, phone, serviceType, comment, id } = event.arguments.input;

  axios({
    method: 'post',
    url: "https://us3.api.mailchimp.com/3.0/lists/433b887bb4/members",
    headers: {
      // Authorization: `Basic ${process.env.MAILCHIMP_API_KEY}`,
      Authorization: `apikey 64df77c6a595b10ca4e4a1e7e53be395-us3`,
      'Content-Type': 'application/json',
    },
    data: {
      status: "subscribed",
      event,
      context,
      email_address: email,
      merge_fields: {
        FULL_NAME: fullname,
        PHONE: phone,
        SERVICE_TYPE: serviceType,
        COMMENT: comment,
        BD_ID: id
      }
    }
  })
  .then(res => {
    context.done(null, "Contact Created"); // SUCCESS with message
  }).catch(error => {
    console.error(error)
  });
};
