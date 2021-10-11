// @styles
import {
  FormContainer,
  ImageWrapper,
  Image
} from './Form.styled'

function Form({ children, ...props }) {
  return (
    <FormContainer {...props}>
      <ImageWrapper>
        <Image
          alt='logo'
          className='Form__logo-wrapper__logo'
          src='assets/logo-white-yellow.png'
          title='logo'
        />
      </ImageWrapper>
      {children}
    </FormContainer>
  )
}

export default Form
