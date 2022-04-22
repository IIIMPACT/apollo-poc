import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowBackIos, Delete, Edit } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { mockData } from 'src/lib'
import * as Styled from './styles'

interface Data {
  id: string
  title: string
  description: string
  complete: boolean
}

const initData = {
  id: '',
  title: '',
  description: '',
  complete: false,
}

const ViewTask: React.FC = () => {
  const {
    push,
    query: { id },
  } = useRouter()
  const [data, setData] = useState<Data>({ ...initData })

  useEffect(() => {
    const [mockTodo] = mockData.filter((item) => item.id === id)

    if (mockTodo) {
      setData({ ...mockTodo })
    }
  }, [id])

  const handleBack = (): void => {
    push('/')
  }

  const handleEdit = (): void => {
    push(`/edit/[id]`, `/edit/${data.id}`)
  }

  const handleDelete = (): void => {
    console.log('deleting ...')

    push('/')
  }

  return (
    <>
      <Typography variant='h4' gutterBottom>
        {data.title}
      </Typography>

      <Typography variant='h6' gutterBottom>
        {data.complete ? 'Done' : 'In Progress'}
      </Typography>

      <Typography variant='body1'>{data.description}</Typography>

      <Styled.ButtonWrap>
        <Button
          variant='outlined'
          startIcon={<ArrowBackIos />}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button variant='contained' startIcon={<Edit />} onClick={handleEdit}>
          Edit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<Delete />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Styled.ButtonWrap>
    </>
  )
}

export default ViewTask
