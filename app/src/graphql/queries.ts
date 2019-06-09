// tslint:disable
// this is an auto generated file. This will be overwritten

export const getClient = `query GetClient($id: ID!) {
  getClient(id: $id) {
    id
    name
    old_id
    status
    notes
  }
}
`;
export const listClients = `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      old_id
      status
      notes
    }
    nextToken
  }
}
`;
