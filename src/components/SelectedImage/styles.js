import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const ImageWrapper = styled.div(
  ({ selectedImage }) => css`
    align-items: center;
    border: ${selectedImage ? 'solid' : 'dashed'} 2px #333;
    display: flex;
    height: 50vh;
    justify-content: center;
    width: 600px;
  `
)

export const Image = styled.img(
  ({ selectedImage }) => css`
    max-height: ${selectedImage ? '50vh' : 'auto'};
    max-width: ${selectedImage ? '100%' : '200px'};
    padding: 5px;
    width: ${selectedImage ? 'auto' : '50%'};
  `
)
