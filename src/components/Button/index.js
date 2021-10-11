// @packages
import React from 'react'
import PropTypes from 'prop-types'
// @styles
import { Button as StyledButton } from './Button.styled'

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} >
      {children}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  size: PropTypes.string,
  tabIndex: PropTypes.string
}
