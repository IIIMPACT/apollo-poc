import { useQuery, gql } from '@apollo/client'
import { listTodos } from 'src/graphql/queries'
import { mockData } from 'src/lib'
import TodoItem from '../TodoItem'
import * as Styled from './styles'

const TodoList: React.FC = () => {
  const { loading, error, data } = useQuery(
    gql`
      ${listTodos}
    `
  )
  console.log(data)
  console.log(error)
  console.log(loading)

  return (
    <Styled.TodoList>
      {mockData.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </Styled.TodoList>
  )
}

export default TodoList
