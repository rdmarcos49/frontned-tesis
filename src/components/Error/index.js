// @styles
import {
  Container,
  Title,
  MessageWrapper,
  Message,
} from './Error.styled'

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
