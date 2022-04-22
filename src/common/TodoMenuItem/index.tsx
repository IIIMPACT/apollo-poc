import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'

interface Props {
  label: string
  icon: React.ReactNode
  onClick: () => void
}

const TodoMenuItem: React.FC<Props> = (props) => {
  const { label, icon, onClick } = props

  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </MenuItem>
  )
}

export default TodoMenuItem
