import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Close, Save } from '@mui/icons-material'
import { Button, FormControlLabel, Switch } from '@mui/material'
import { TextField, Form, FormButtons } from 'src/common'
import { UpdateTodoInput } from 'API'
import { useUpdateTodoMutation, useViewTodo } from 'src/hooks/todos'

const initValues = {
  id: '',
  title: '',
  description: '',
  complete: false,
}

const EditTodo: React.FC = () => {
  const [values, setValues] = useState<UpdateTodoInput>({ ...initValues })

  const { updateTodo, data, loading, error } = useUpdateTodoMutation()
  const {
    push,
    query: { id },
  } = useRouter()
  const { data: serverData } = useViewTodo(id as string)

  useEffect(() => {
    if (serverData) {
      const { id, _version, complete, description, title }: UpdateTodoInput =
        serverData
      setValues({ id, _version, complete, description, title })
    }
  }, [serverData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = e.target

    setValues((prev) => ({ ...prev, complete: checked }))
  }

  const handleCancel = (): void => {
    push('/todo/[id]', `/todo/${id}`)
  }

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    await updateTodo({ variables: { input: { ...values } } })
    push('/todo/[id]', `/todo/${id}`)
    // console.log('Submitting Form ...')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormControlLabel
        control={<Switch checked={values.complete} onChange={handleComplete} />}
        label='Complete'
      />

      <TextField
        value={values.title}
        name='title'
        label='Title'
        onChange={handleChange}
      />
      <TextField
        value={values.description}
        name='description'
        label='Description'
        onChange={handleChange}
        multiline
      />
      <FormButtons>
        <Button type='submit' variant='contained' startIcon={<Save />}>
          Submit
        </Button>
        <Button
          type='button'
          variant='outlined'
          color='secondary'
          startIcon={<Close />}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </FormButtons>
    </Form>
  )
}

export default EditTodo
