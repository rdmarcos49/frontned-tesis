// @packages
import { useState, useEffect, createContext } from 'react'
// @utils
import { parseJwt } from 'utils/parseJwt'
// @constants
import { initialUserData } from 'constants/initialUserData'

const Context = createContext({})

export function AuthContextProvider ({ children }) {
  const [userData, setUserData] = useState(initialUserData)
  const [jwt, setJwt] = useState(
    parseJwt(window.sessionStorage.getItem('jwt'))
      ? () => window.sessionStorage.getItem('jwt')
      : null
  )

  useEffect(() => {
    if (jwt) {
      const userInformation = parseJwt(jwt)
      if (userInformation) {
        setUserData(userInformation)
      }
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
