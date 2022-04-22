import { useMutation, useQuery, gql } from '@apollo/client'
import {
  getTodo as getTodoQuery,
  listTodos as listTodosQuery,
} from 'src/graphql/queries'
import { Todo, UpdateTodoInput } from 'API'
import {
  updateTodo as updateTodoMutation,
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from 'src/graphql/mutations'

export function useListTodos() {
  const { loading, error, data } = useQuery(
    gql`
      ${listTodosQuery}
    `
  )

  if (data) {
    const {
      listTodos: { items },
    } = data

    const filteredItems = items.filter((item: Todo) => !item._deleted === true)

    return { data: filteredItems, error, loading }
  }

  return { error, loading }
}

export function useViewTodo(id: string) {
  const { data, loading, error } = useQuery(
    gql`
      ${getTodoQuery}
    `,
    {
      variables: { id },
    }
  )

  if (data) {
    const { getTodo } = data
    return { data: getTodo, loading, error }
  }

  return { error, loading }
}

export function useUpdateTodoMutation() {
  const [updateTodo, { data, loading, error }] = useMutation(
    gql`
      ${updateTodoMutation}
    `,
    // TODO: this doesn't seem to be working
    {
      refetchQueries: [
        'ListTodos', // Query name
        'GetTodo', // Query name
      ],
    }
  )
  console.log('data:', data)

  return { updateTodo, data, loading, error }
}

export function useCreateTodoMutation() {
  const [createTodo, { data, loading, error }] = useMutation(
    gql`
      ${createTodoMutation}
    `,
    {
      refetchQueries: [
        'ListTodos', // Query name
      ],
    }
  )

  return { createTodo, data, loading, error }
}

export function useDeleteTodoMutation() {
  const [deleteTodo, { data, loading, error }] = useMutation(
    gql`
      ${deleteTodoMutation}
    `,
    {
      refetchQueries: [
        'ListTodos', // Query name
      ],
    }
  )

  return { deleteTodo, data, loading, error }
}
