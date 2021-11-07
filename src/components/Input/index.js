// @packages
import PropTypes from 'prop-types'
// @styles
import {
  InputWrapper,
  Label,
  StyledInput,
} from './styles'

function Input({
  error,
  label,
  halfWidth,
  ...props
}) {
  return (
    <InputWrapper halfWidth>
      <Label> {label} </Label>
      <StyledInput autoComplete='off' {...props} />
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  halfWidth: PropTypes.bool
}
