// @packages
import { useLocation } from 'wouter'
// @styles
import styles from './Option.module.scss'

function Option({ icon, path, text }) {
  const [, setLocation] = useLocation()

  const onHandleClick = () => {
    setLocation(path)
  }
  
  return (
    <div className={styles.Option}>
      <div onClick={onHandleClick}>
        <i className={icon}></i>
      </div>
      <p> {text} </p>
    </div>
  )
}

export default Option
