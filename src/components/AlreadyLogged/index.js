// @packages
import { Link } from 'wouter'
// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './AlreadyLogged.module.scss'

function AlreadyLogged({ path }) {
  return (
    <div className={styles.AlreadyLogged}>
      <h1>Ya te encuentras loggeado/a!</h1>
      <section>
        <p>Has querido acceder al path de '{path}' pero te encuentras loggeado/a.</p>
        <p>No prefirirías ir, por ejemplo, a la {<Link to={URL.HOME}>Home</Link>}?</p>
      </section>
    </div>
  )
}

export default AlreadyLogged
