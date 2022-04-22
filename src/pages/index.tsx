import type { NextPage } from 'next'
import { TodoList } from 'src/components'
import { AppLayout } from 'src/layouts'

const Home: NextPage = () => {
  return (
    <AppLayout title='Todo List' showCreate>
      <TodoList />
    </AppLayout>
  )
}

export default Home
