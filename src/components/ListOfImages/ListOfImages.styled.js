import styled from 'styled-components'

export const Container = styled.div`
  border: solid 2px #333;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 50vh;
  justify-content: flex-start;
  margin: 0 5px;
  overflow-y: scroll;
  width: 180px;
`

export const ImagesWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin: 0 5px;
  position: relative;
`

export const IconWrapper = styled.span`
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
`

export const Image = styled.img`
  cursor: pointer;
  height: 110px;
  margin: 5px 0;
  max-width: 100%;
  transition: 0.2s;

  &:hover {
      filter: brightness(0.8);
  }
`
