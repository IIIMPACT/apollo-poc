import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Close, Save } from '@mui/icons-material'
import { Button, FormControlLabel, Switch } from '@mui/material'
import { TextField, Form, FormButtons } from 'src/common'
import { mockData } from 'src/lib'

interface Values {
  id: string
  title: string
  description: string
  complete: boolean
}

const initValues = {
  id: '',
  title: '',
  description: '',
  complete: false,
}

const EditTodo: React.FC = () => {
  const [values, setValues] = useState<Values>({ ...initValues })
  const {
    push,
    query: { id },
  } = useRouter()

  useEffect(() => {
    const [mockTodo] = mockData.filter((item) => item.id === id)

    if (mockTodo) {
      setValues({ ...mockTodo })
    }
  }, [id])

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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()

    console.log('Submitting Form ...')

    push('/')
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
