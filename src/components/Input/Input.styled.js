import styled, { css } from 'styled-components'

export const InputWrapper = styled.div(
  ({ halfWidth }) => css`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    width: ${halfWidth ? '100%' : '50%'};
  `
)

export const Label = styled.label`
  color: #fff;
  padding-bottom: 3px;
`

export const StyledInput = styled.input`
  border: solid 2px;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
`
