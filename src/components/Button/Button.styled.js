import styled, { css } from 'styled-components'

const fonts = {
  small: '12px',
  medium: '16px',
}

const padding = {
  small: '10px 24px',
  medium: '16px 32px',
}


export const Button = styled.button(
  ({ size }) => css`
    background-color: $white;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: #444;
    display: inline-block;
    font-size: ${size === 'small' ? fonts.small : fonts.medium};
    font-weight: bold;
    padding: ${size === 'small' ? padding.small : padding.medium};
    text-align: center;
    white-space: normal;

    &:hover {
      background-color: $darkestWhite;
      cursor: pointer;
      transition: 0.2s;
    }
  `
)
