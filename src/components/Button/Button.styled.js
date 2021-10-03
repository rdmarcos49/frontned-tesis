import styled, { css } from 'styled-components'

const fontStyle = {
  small: {
    'font-size': '12px',
    'padding': '10px 24px',
  },
  medium: {
    'font-size': '16px',
    'padding': '16px 32px',
  }
}

export const Button = styled.button(
  ({ size }) => css`
    background-color: $white;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: #444;
    display: inline-block;
    font-weight: bold;
    text-align: center;
    white-space: normal;
    ${fontStyle[size]};

    &:hover {
      background-color: $darkestWhite;
      cursor: pointer;
      transition: 0.2s;
    }
  `
)
