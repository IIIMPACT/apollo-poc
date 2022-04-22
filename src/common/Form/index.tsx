import * as Styled from './styles'

interface Props {
  children: React.ReactNode | React.ReactNode
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return <Styled.Form onSubmit={onSubmit}>{children}</Styled.Form>
}

export default Form
