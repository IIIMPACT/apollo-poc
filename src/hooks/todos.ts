import { useQuery, gql } from '@apollo/client'
import {
  getTodo as getTodoQuery,
  listTodos as listTodosQuery,
} from 'src/graphql/queries'
import { Todo } from 'API'

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
