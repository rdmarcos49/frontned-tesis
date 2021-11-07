// @packages
import PropTypes from 'prop-types'
// @styles
import {
  Link,
  Button,
  Description,
  Icon,
} from './styles'

function Option({ icon, path, text }) {

  return (
    // TODO: avoid cleanup sessionstorage when the anchor open a new tab
    <Link href={path}>
      <Button>
        <Icon className={icon}></Icon>
      </Button>
      <Description> {text} </Description>
    </Link>
  )
}

export default Option

Option.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string, // TODO: refactor -> provitional from fontawesome
  text: PropTypes.string
}
