import { mockData } from 'src/lib'
import TodoItem from '../TodoItem'
import * as Styled from './styles'

const TodoList: React.FC = () => {
  return (
    <Styled.TodoList>
      {mockData.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </Styled.TodoList>
  )
}

export default TodoList
