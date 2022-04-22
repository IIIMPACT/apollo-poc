import { Add } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { Fab } from '@mui/material'
import * as Styled from './styles'

interface Props {}

const CreateTaskFab: React.FC<Props> = (props) => {
  const router = useRouter()

  const handleClick = (): void => {
    router.push('/create')
  }

  return (
    <Styled.CreateTaskFab color='primary' onClick={handleClick}>
      <Add />
    </Styled.CreateTaskFab>
  )
}

export default CreateTaskFab
