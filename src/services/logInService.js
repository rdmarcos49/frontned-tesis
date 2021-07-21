// @utils
import setSessionCookie from 'utils/sessionCookie'

const logInService = async (dataForLogIn) => {
  const URL = 'http://localhost:3030/login'
  
  const info = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataForLogIn),
  }).then(res => res.json())

  if (!!info.token) {
    const { expireTime, token } = info
    const { id } = info.user
    setSessionCookie(id, token, expireTime)
    alert('Autentificacion correcta!')
    return true
  } else {
    alert('Usuario y/o contraseña incorrecta')
    return false
  }
} 

export default logInService
