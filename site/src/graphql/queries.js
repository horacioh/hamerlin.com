/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLead = `query GetLead($id: ID!) {
  getLead(id: $id) {
    id
    fullname
    email
    phone
    serviceType
    comment
  }
}
`;
export const listLeads = `query ListLeads(
  $filter: ModelLeadFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fullname
      email
      phone
      serviceType
      comment
    }
    nextToken
  }
}
`;
