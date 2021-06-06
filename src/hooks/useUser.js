// @packages
import { useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { useLocation } from "wouter";
// @contexts
import SessionContext from 'context/SessionContext'
// @services
import getUserService from 'services/getUserService'
// @constants
import { publicUrl } from 'constants/urls'

export default function useUser() {
  const { user, setUser } = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useLocation()

  const isAPublicUrl = publicUrl.includes(location)
  
  useEffect(() => {
    async function fetchAndSetUser(jwt) {
      const userFetched = await getUserService(jwt)
      setUser(userFetched.user)
      setIsLoading(false)
    }
    if (isAPublicUrl) {
      setIsLoading(false)
      return null
    }
    if (!user) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      
      if (jwt) {
        fetchAndSetUser(jwt)
      } else {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }, [publicUrl, user, setUser, setLocation])

  const logOut = () => {
    setUser(null)
    const cookies = new Cookies()
    cookies.remove('sessionCookie')
  }

  return {
    logOut,
    isLogged: (Boolean(user)),
    isLoading,
    user,
  }
}
