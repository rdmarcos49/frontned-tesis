// @packages
import React from 'react'
// @styles
import './styles.scss'

const Button = ({ callback, children, size, tabIndex, type }) => {
  const attributesIfTheCallbackExists = {type: type, onClick: callback}
  const attributesIfTheCallbackDoesNotExists = {type: type}
  const attributes = !!callback ? attributesIfTheCallbackExists : attributesIfTheCallbackDoesNotExists
  return (
    <button
      {...attributes}
      tabIndex={!!tabIndex ? tabIndex : 1}
      className={`Button ${size ? `Button--${size}` : 'Button--medium'}`}
    >
      {children}
    </button>
  )
}

export default Button
