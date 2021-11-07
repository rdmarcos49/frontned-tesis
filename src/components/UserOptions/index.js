// @packages
import PropTypes from 'prop-types'
// @components
import Option from 'components/Option'
// @styles
import { Container } from './styles'

function UserOptions ({ options = [] }) {
  return (
    <Container>
      {options.map(option => 
        <Option
          key={option.text}
          icon={option.icon}
          path={option.path}
          text={option.text}
        />
      )}
    </Container>
  )
}

export default UserOptions

UserOptions.propTypes = {
  options: PropTypes.array
}
