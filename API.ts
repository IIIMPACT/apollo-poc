/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  complete?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  title?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreateTodoInput = {
  _version?: number | null,
  complete: boolean,
  description?: string | null,
  id?: string | null,
  title: string,
};

export type Todo = {
  __typename: "Todo",
  _deleted?: boolean | null,
  _lastChangedAt: number,
  _version: number,
  complete: boolean,
  createdAt: string,
  description?: string | null,
  id: string,
  title: string,
  updatedAt: string,
};

export type DeleteTodoInput = {
  _version?: number | null,
  id: string,
};

export type UpdateTodoInput = {
  _version?: number | null,
  complete?: boolean | null,
  description?: string | null,
  id: string,
  title?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  complete?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  title?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      _deleted?: boolean | null,
      _lastChangedAt: number,
      _version: number,
      complete: boolean,
      createdAt: string,
      description?: string | null,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  lastSync?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      _deleted?: boolean | null,
      _lastChangedAt: number,
      _version: number,
      complete: boolean,
      createdAt: string,
      description?: string | null,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    complete: boolean,
    createdAt: string,
    description?: string | null,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};
