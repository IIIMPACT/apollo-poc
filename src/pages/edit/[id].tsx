import { NextPage } from 'next'
import { EditTodo } from 'src/components'
import { AppLayout } from 'src/layouts'

const EditPage: NextPage = () => {
  return (
    <AppLayout title='Edit Task'>
      <EditTodo />
    </AppLayout>
  )
}

export default EditPage
