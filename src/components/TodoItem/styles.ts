import styled from '@emotion/styled'
import { Avatar, CardHeader, colors } from '@mui/material'

interface TodoCompleteProps {
  complete: boolean
}

export const TodoItemHeader = styled(CardHeader)`
  .MuiCardHeader-action {
    align-self: auto;
    margin: 0;
  }
`

export const TodoComplete = styled(Avatar)<TodoCompleteProps>`
  background-color: ${({ complete }) =>
    complete ? colors.lightGreen[600] : colors.grey[400]};
`
