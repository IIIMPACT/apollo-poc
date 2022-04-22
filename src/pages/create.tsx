import type { NextPage } from 'next'
import { CreateTodo } from 'src/components'
import { AppLayout } from 'src/layouts'

const CreateTodoPage: NextPage = () => {
  return (
    <AppLayout title='Create New Todo'>
      <CreateTodo />
    </AppLayout>
  )
}

export default CreateTodoPage
