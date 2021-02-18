// @packages
import Cookies from 'universal-cookie'
import {useLocation} from 'wouter'

export default function useConnection() {
  const [, setLocation] = useLocation()
  const login = async ({username, password}) => {
    const response = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }
    try {
      console.log(response)
      const info = await fetch('http://localhost:3030/login', response).then(response => response.json())
      console.log(info)
      if (!!info.token) {
        const cookies = new Cookies()
        let expireDate = new Date()
        expireDate.setMinutes(expireDate.getMinutes() + info.expireTime)
        cookies.set('sessionCookie', info.token, { path: '/', expires: expireDate })
        alert("Autentificacion correcta!")
        setLocation('/home')
      } else {
        alert("Usuario y/o contraseña incorrecta")
      }
    } catch (e) {
      console.log('Falló la identificacion de usuario')
      console.log(e)
    }
  }

  const signin = async (objectWithAllTheInformation) => {
    const response = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
        // 'Content-type': 'multipart/form-data'
      },
      body: JSON.stringify({...objectWithAllTheInformation})
    }
    try {
      console.log(response)
      const info = await fetch('http://localhost:3030/signin', response).then(response => response.json())
      console.log(info)
      setLocation('/login')
    } catch (e) {
      console.log(e)
    }
  }

  return {
    login,
    signin,
  }
}
