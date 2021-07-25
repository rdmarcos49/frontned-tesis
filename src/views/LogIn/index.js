// @packages
import { useEffect } from 'react'
import { useLocation } from 'wouter'
// @components
import { LogInForm } from 'components/Form/LogInForm'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { URL } from 'constants/urls'
// @styles
import './styles.scss'

function LogIn() {
  const [, setLocation] = useLocation();

  const { isLoading, isLogged } = useUser()

  useEffect(() => {
    if (isLoading) return <p>Cargando...</p>
  }, [isLoading])

  useEffect(() => {
    if (isLogged) {
      setLocation(URL.HOME)
    }
  }, [isLogged, setLocation])

  return (
    <div className='Login'>
      <LogInForm />
    </div>
  )
}

export default LogIn
