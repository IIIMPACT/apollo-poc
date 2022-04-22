import { useListTodos } from 'src/hooks/todos'
import TodoItem from '../TodoItem'
import * as Styled from './styles'

const TodoList: React.FC = () => {
  const { loading, error, data } = useListTodos()

  return (
    <Styled.TodoList>
      {data && data.map((item) => <TodoItem key={item.id} {...item} />)}
    </Styled.TodoList>
  )
}

export default TodoList
