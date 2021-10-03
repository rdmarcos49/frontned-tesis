import styled from 'styled-components'
import { Link as WouterLink } from 'wouter'

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #333;
  color: #ccc;
  display: flex;
  font-weight: bold;
  height: 50px;
  padding: 0 10px;
  width: 100%;
`

export const NavigationWrapper = styled.nav`
  align-items: center;
  display: flex;
`

export const Link = styled(WouterLink)`
  color: #ccc;
  text-decoration: none;

  &:hover {
      text-decoration: underline;
  }
`

export const AvatarWrapper = styled.div`
  margin: 0 10px;
`

export const AvatarName = styled.span`

`
