// @styles
import styles from './Error.module.scss'

function Error() {
  return (
    <div className={styles.ErrorPage}>
      <h1>404</h1>
      <section>
        <p>Ups! No hemos podido encontrar la pagina que buscas.</p>
      </section>
    </div>
  )
}

export default Error
