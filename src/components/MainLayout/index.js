// @styles
import styles from './MainLayout.module.scss'

function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      {children}
    </div>
  )
}

export default MainLayout
