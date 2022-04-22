import { useRouter } from 'next/router'
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { Card, Typography, CardActionArea } from '@mui/material'
import * as Styled from './styles'

interface Props {
  id: string
  title: string
  description: string
  complete: boolean
}

const TodoItem: React.FC<Props> = (props) => {
  const { id, title, description, complete } = props

  const router = useRouter()
  const trimmedDescription = `${description.substring(0, 260)}...`

  const handleView = (): void => {
    router.push('/todo/[id]', `/todo/${id}`)
  }

  return (
    <Card elevation={5}>
      <CardActionArea onClick={handleView}>
        <Styled.TodoItemHeader
          title={<Typography variant='h6'>{title}</Typography>}
          subheader={trimmedDescription}
          avatar={
            <Styled.TodoComplete complete={complete}>
              {complete ? <CheckBox /> : <CheckBoxOutlineBlank />}
            </Styled.TodoComplete>
          }
        />
      </CardActionArea>
    </Card>
  )
}

export default TodoItem
