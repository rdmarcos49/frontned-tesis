// @packages
import React from 'react'
// @styles
import './styles.scss'

function Select({
  disabledText,
  error,
  label,
  options,
  ...props
}) {
  return (
    <div className='Select'>
      <label className='Select__label'>{label}</label>
      <select
        className={`Select__select ${!!error ? 'Select__select--error-border' : 'Select__select--normal-border'}`}
        {...props}
      >
        <option disabled defaultValue value=''> {`-- ${disabledText} --`} </option>
        {options.map((option, index) => 
          <option key={index} value={option.value}>{option.text}</option>  
        )}
      </select>
      {!!error && <span className='Select__error'>{error}</span>}
    </div>
  )
}

export default Select
