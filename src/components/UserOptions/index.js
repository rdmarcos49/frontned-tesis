// @components
import Option from 'components/Option'
// @styles
import styles from './UserOptions.module.scss'

function UserOptions ({ options }) {
  return (
    <div className={styles.UserOptions}>
      {options.map(option => 
        <Option
          key={option.text}
          icon={option.icon}
          path={option.path}
          text={option.text}
        />
      )}
    </div>
  )
}

export default UserOptions
