/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateClientInput = {
  id?: string | null,
  name: string,
  old_id: string,
  status: ClientStatus,
  notes?: string | null,
};

export enum ClientStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type UpdateClientInput = {
  id: string,
  name?: string | null,
  old_id?: string | null,
  status?: ClientStatus | null,
  notes?: string | null,
};

export type DeleteClientInput = {
  id?: string | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  old_id?: ModelStringFilterInput | null,
  status?: ModelClientStatusFilterInput | null,
  notes?: ModelStringFilterInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelClientStatusFilterInput = {
  eq?: ClientStatus | null,
  ne?: ClientStatus | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
};

export type CreateClientMutation = {
  createClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
};

export type UpdateClientMutation = {
  updateClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
};

export type DeleteClientMutation = {
  deleteClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      old_id: string,
      status: ClientStatus,
      notes: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateClientSubscription = {
  onCreateClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient:  {
    __typename: "Client",
    id: string,
    name: string,
    old_id: string,
    status: ClientStatus,
    notes: string | null,
  } | null,
};
