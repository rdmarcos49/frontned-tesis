// @packages
import PropTypes from 'prop-types'
// @styles
import styles from './Avatar.module.scss'

function Avatar({ avatar, name, lastname }) {
  return (
    <>
      {avatar
        ?
          <img className={styles.AvatarImage} alt='avatar' src={avatar}/>
        :
          <p className={styles.AvatarLetters}>
            {name.charAt(0).toUpperCase()}{lastname.charAt(0).toUpperCase()}
          </p>
      }
    </>
  )
}

export default Avatar

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string
}
