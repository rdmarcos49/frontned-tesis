// styles
import { Container } from './LoadingDots.styled'
// svg
import { ReactComponent as Loader } from 'assets/loader.svg'

function LoadingDots() {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

export default LoadingDots
