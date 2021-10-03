// @packages
import PropTypes from 'prop-types'
// @styles
import {
  Container,
  Label,
  Selection,
  Option
} from './Select.styled'

function Select({
  disabledText,
  label,
  options,
  ...props
}) {
  const defaultFieldAttrs = { disabled: true, defaultValue: true, value: '' }
  return (
    <Container>
      <Label>{label}</Label>
      <Selection {...props} >
        <Option {...defaultFieldAttrs}> {`-- ${disabledText} --`} </Option>
        {options.map((option, index) => 
          <Option key={index} value={option.value}>{option.text}</Option>  
        )}
      </Selection>
    </Container>
  )
}

export default Select

Select.propTypes = {
  options: PropTypes.array.isRequired,
  disabledText: PropTypes.string,
  label: PropTypes.string
}
