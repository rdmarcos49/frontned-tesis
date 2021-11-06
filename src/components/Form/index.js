// @styles
import {
  FormContainer,
  ImageWrapper,
  Image
} from './styles'

function Form({ children, ...props }) {
  return (
    <FormContainer {...props}>
      <ImageWrapper>
        <Image alt='logo' src='assets/logo-white-yellow.png' title='logo' />
      </ImageWrapper>
      {children}
    </FormContainer>
  )
}

export default Form
