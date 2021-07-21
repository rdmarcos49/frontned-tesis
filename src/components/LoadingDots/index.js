// styles
import styles from './LoadingDots.module.scss'
// svg
import { ReactComponent as Loader } from 'assets/loader.svg'

function LoadingDots() {
  return (
    <div className={styles.LoadingDots}>
      <Loader />
    </div>
  )
}

export default LoadingDots
