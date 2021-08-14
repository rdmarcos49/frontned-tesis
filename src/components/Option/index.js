// @packages
import { useLocation } from 'wouter'
import PropTypes from 'prop-types'
// @styles
import styles from './Option.module.scss'

function Option({ icon, path, text }) {
  const [, setLocation] = useLocation()

  const onHandleClick = () => {
    setLocation(path)
  }
  
  return (
    <div className={styles.Option}>
      <button onClick={onHandleClick}>
        <i className={icon}></i>
      </button>
      <p> {text} </p>
    </div>
  )
}

export default Option

Option.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string, // TODO: refactor -> provitional from fontawesome
  text: PropTypes.string
}
