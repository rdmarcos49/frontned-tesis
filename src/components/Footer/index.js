import styles from './Footer.module.scss'
import { ReactComponent as GithubIcon } from 'assets/source_icons_github.svg'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <span> Aplicacion de Retinar - 2021 </span>
      <nav>
        <a href='https://github.com/rdmarcos49/frontend-tesis' rel='noopener noreferrer' target='_blank'>
          <GithubIcon />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
