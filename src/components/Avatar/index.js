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
