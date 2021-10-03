// @packages
import React from 'react'
// @styles
import { Wrapper } from './ButtonsWrapper.styled'

function ButtonsWrapper({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default ButtonsWrapper
