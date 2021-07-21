// @packages
import React from 'react'
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
