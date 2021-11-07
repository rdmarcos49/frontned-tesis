// @styles
import {
  Container,
  Title,
  MessageWrapper,
  Message,
} from './styles'

function Error({
  errorCode = 404,
  message = 'Ups! No hemos podido encontrar la pagina que buscas.',
}) {
  return (
    <Container>
      <Title> {errorCode} </Title>
      <MessageWrapper>
        <Message> {message} </Message>
      </MessageWrapper>
    </Container>
  )
}

export default Error
