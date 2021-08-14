// @packages
import PropTypes from 'prop-types'
// @components
import Option from 'components/Option'
// @styles
import styles from './UserOptions.module.scss'

function UserOptions ({ options = [] }) {
  return (
    <section className={styles.UserOptions}>
      {options.map(option => 
        <Option
          key={option.text}
          icon={option.icon}
          path={option.path}
          text={option.text}
        />
      )}
    </section>
  )
}

export default UserOptions

UserOptions.propTypes = {
  options: PropTypes.array
}
