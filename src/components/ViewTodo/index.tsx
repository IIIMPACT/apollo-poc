import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowBackIos, Delete, Edit } from '@mui/icons-material'
import { Button, Skeleton, Typography } from '@mui/material'
import * as Styled from './styles'
import { useDeleteTodoMutation, useViewTodo } from 'src/hooks/todos'

const ViewTask: React.FC = () => {
  const {
    push,
    query: { id },
  } = useRouter()

  const { data, loading, error } = useViewTodo(id as string)
  const { deleteTodo } = useDeleteTodoMutation()

  const handleBack = (): void => {
    push('/')
  }

  const handleEdit = (): void => {
    push(`/edit/[id]`, `/edit/${data.id}`)
  }

  const handleDelete = async (): Promise<void> => {
    console.log(id)
    console.log(data._version)

    await deleteTodo({ variables: { input: { id, _version: data._version } } })
    push('/')
  }

  if (loading) return <Skeleton sx={{ bgcolor: 'green' }} />

  return (
    <>
      {data && (
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
            <Button
              variant='contained'
              startIcon={<Edit />}
              onClick={handleEdit}
            >
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
      )}
    </>
  )
}

export default ViewTask
