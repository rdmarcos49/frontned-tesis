// @styles
import styles from './Avatar.module.scss'

function Avatar({ avatar, name, lastname }) {
  return (
    <>
      {avatar
        ?
          <img className={styles.AvatarImage} alt='avatar' src={avatar}/>
        :
          <p className={styles.AvatarLetters}>{name.charAt(0)}{lastname.charAt(0)}</p>
      }
    </>
    
  )
}

export default Avatar
