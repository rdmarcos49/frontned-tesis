import React from 'react'

import './styles.scss'

function Badge({children, clickeable, ...props}) {
  return (
    <button className={`badge ${props.disabled===true ? 'badge--disabled' : 'badge--enabled'}`} {...props}>
      {children}
    </button>
  )
}

export default Badge
