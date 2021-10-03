import styled from 'styled-components'
import { Link as WouterLink } from 'wouter'

export const Link = styled(WouterLink)`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Button = styled.button`
  background-color: #333;
  border: solid 4px $white;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  overflow: hidden;
  padding: 20px;
  width: 210px;
`

export const Description = styled.div`
  color: #333;
  margin: 10px 0;
  max-width: 210px;
  text-align: center;
`

export const Icon = styled.i`
`
