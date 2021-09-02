// @packages
import { Link } from 'wouter'
import PropTypes from 'prop-types'
// @styles
import styles from './Option.module.scss'

function Option({ icon, path, text }) {

  return (
    // TODO: avoid cleanup sessionstorage when the anchor open a new tab
    <Link className={styles.Option} href={path}>
      <button>
        <i className={icon}></i>
      </button>
      <p> {text} </p>
    </Link>
  )
}

export default Option

Option.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string, // TODO: refactor -> provitional from fontawesome
  text: PropTypes.string
}
