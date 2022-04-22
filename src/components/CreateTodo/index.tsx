import { Close, Save } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TextField, Form } from 'src/common'
import { FormButtons } from 'src/common/FormButtons/styles'

interface Values {
  title: string
  description: string
}

const initValues = {
  title: '',
  description: '',
}

const CreateTodo: React.FC = () => {
  const [values, setValues] = useState<Values>({ ...initValues })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleCancel = (): void => {
    router.push('/')
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()

    console.log('Submitting Form ...')

    router.push('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
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

export default CreateTodo
