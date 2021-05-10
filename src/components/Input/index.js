// @packages
import React from 'react'
// @styles
import './styles.scss'

const Input = ({
  error,
  label,
  halfWidth,
  ...props
}) => {
  return (
    <div className={`Input ${!!halfWidth ? 'Input--half-width' : 'Input--full-width'}`}>
      <label className='Input__label'>{label}</label>
      <input
        autoComplete='off'
        className={`Input__input ${!!error ? 'Input__input--error-border' : 'Input__input--normal-border'}`}
        {...props}
      />
      <span className={`Input__error ${error ? 'Input__error--enabled' : 'Input__error--disabled'}`}>{error || '#'}</span>
    </div>
  )
}

export default Input
