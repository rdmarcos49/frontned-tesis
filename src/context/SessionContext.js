// @packages
import React, { useState } from 'react'

const Context  = React.createContext({})

export function SessionContextProvider ({children}) {
  const [isLogged, setIsLogged] = useState(null)

  return <Context.Provider value={{isLogged, setIsLogged}}>
    {children}
  </Context.Provider>
}

export default Context
