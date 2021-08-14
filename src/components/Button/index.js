// @packages
import React from 'react'
import PropTypes from 'prop-types'
// @styles
import './styles.scss'

const Button = ({ children, size, tabIndex, ...props }) => {
  return (
    <button
      className={`Button ${size ? `Button--${size}` : 'Button--medium'}`}
      tabIndex={tabIndex && tabIndex}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  size: PropTypes.string,
  tabIndex: PropTypes.string
}
