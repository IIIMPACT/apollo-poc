import { TextField as MuiTextField } from '@mui/material'

interface Props {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  multiline?: boolean
}

const TextField: React.FC<Props> = (props) => {
  const { label, name, value, onChange, multiline = false } = props

  return (
    <MuiTextField
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      multiline={multiline}
      rows={10}
      variant='outlined'
    />
  )
}

export default TextField
