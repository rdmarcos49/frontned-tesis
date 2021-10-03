// @styles
import { Container } from './MainLayout.styled'

function MainLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MainLayout
