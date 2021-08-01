// @packages
import { useState, useEffect, createContext } from 'react'
// @utils
import { parseJwt } from 'utils/parseJwt'
// @constants
import { initialUserData } from 'constants/initialUserData'

const Context = createContext({})

export function SessionContextProvider ({ children }) {
  const [userData, setUserData] = useState({ ...initialUserData })
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  useEffect(() => {
    if (jwt) {
      const userInformation = parseJwt(jwt)
      setUserData({ ...userInformation })
    }
  }, [jwt])
 
  return <Context.Provider value={{
    userData,
    jwt,
    setJwt,
  }}>
    {children}
  </Context.Provider>
}

export default Context
