// @packages
import React from 'react'
// @styles
import './styles.scss'

const Input = ({
  error,
  label,
  halfWidth,
  name,
  onClearErrorsForFocus,
  onHandleChangeField, 
  onHandleErrors,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className={`Input ${!!halfWidth ? 'Input--half-width' : 'Input--full-width'}`}>
      <label className='Input__label'>{label}</label>
      <input
        autoComplete='off'
        className={`Input__input ${!!error ? 'Input__input--error-border' : 'Input__input--normal-border'}`}
        name={name}
        onChange={onHandleChangeField}
        onFocus={onClearErrorsForFocus}
        onBlur={onHandleErrors}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <span className='Input__error'>{error}</span>
    </div>
  )
}

export default Input
