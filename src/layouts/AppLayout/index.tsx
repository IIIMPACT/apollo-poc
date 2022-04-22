import { CreateTaskFab } from 'src/common'
import { Header } from 'src/components'
import * as Styled from './styles'

interface Props {
  children: React.ReactNode
  title: string
  showCreate?: boolean
}

const AppLayout: React.FC<Props> = (props) => {
  const { children, title, showCreate = false } = props

  return (
    <Styled.AppLayout>
      <Header title={title} />
      <Styled.Main>{children}</Styled.Main>
      {showCreate && <CreateTaskFab />}
    </Styled.AppLayout>
  )
}

export default AppLayout
