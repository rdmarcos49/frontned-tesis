// @packages
import {useContext, useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
// @contexts
import SessionContext from 'context/SessionContext'

export default function useUser() {
  const {isLogged, setIsLogged} = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(isLogged)
    setIsLogged(true)
    if (!isLogged) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      const isLogged = !!jwt
      setIsLogged(isLogged)
    }
    setIsLoading(false)
  }, [isLogged, setIsLogged])

  return {
    isLogged,
    isLoading,
  }
}
