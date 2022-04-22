import * as Styled from './styles'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const FormButtons: React.FC<Props> = ({ children }) => {
  return <Styled.FormButtons>{children}</Styled.FormButtons>
}

export default FormButtons
