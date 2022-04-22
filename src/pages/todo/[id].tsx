import { NextPage } from 'next'
import { ViewTodo } from 'src/components'
import { AppLayout } from 'src/layouts'

const TodoPage: NextPage = () => {
  return (
    <AppLayout title='Task'>
      <ViewTodo />
    </AppLayout>
  )
}

export default TodoPage
