import styles from './Footer.module.scss'
import { ReactComponent as LinkedinIcon } from 'assets/source_icons_linkedin.svg'
import { ReactComponent as TwitterIcon } from 'assets/source_icons_twitter.svg'
import { ReactComponent as GithubIcon } from 'assets/source_icons_github.svg'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <span> Aplicacion de Retinar - 2021 </span>
      <nav>
        <a href='https://www.linkedin.com/in/roberto-david-marcos/' rel='noopener noreferrer' target='_blank'>
          <LinkedinIcon />
        </a>
        <a href='https://twitter.com/rdmarcos49' rel='noopener noreferrer' target='_blank'>
          <TwitterIcon />
        </a>
        <a href='https://github.com/rdmarcos49' rel='noopener noreferrer' target='_blank'>
          <GithubIcon />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
