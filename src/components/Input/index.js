// @packages
import React from 'react'
// @styles
import './styles.scss'

function Input({
  error,
  label,
  halfWidth,
  ...props
}) {
  return (
    <div className={`Input ${!!halfWidth ? 'Input--half-width' : 'Input--full-width'}`}>
      <label className='Input__label'>{label}</label>
      <input
        autoComplete='off'
        className='Input__input Input__input--error-border'
        {...props}
      />
    </div>
  )
}

export default Input
