// @packages
import React from 'react'
// @styles
import './styles.scss'

function Select({
  disabledText,
  label,
  options,
  ...props
}) {
  return (
    <div className='Select'>
      <label className='Select__label'>{label}</label>
      <select
        className={`Select__select Select__select--normal-border`}
        {...props}
      >
        <option disabled defaultValue value=''> {`-- ${disabledText} --`} </option>
        {options.map((option, index) => 
          <option key={index} value={option.value}>{option.text}</option>  
        )}
      </select>
    </div>
  )
}

export default Select
