import { Typography } from '@mui/material'
import * as Styled from './styles'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Styled.Header position='static'>
      <Typography variant='h4'>{title}</Typography>
    </Styled.Header>
  )
}

export default Header
