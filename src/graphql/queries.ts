/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      _deleted
      _lastChangedAt
      _version
      complete
      createdAt
      description
      id
      title
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        complete
        createdAt
        description
        id
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncTodos(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        complete
        createdAt
        description
        id
        title
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
