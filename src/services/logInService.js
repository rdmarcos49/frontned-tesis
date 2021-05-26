// @utils
import setSessionCookie from 'utils/sessionCookie'

const logInService = async (dataFromUserForm) => {
  const URL = 'http://localhost:3030/login'
  console.log(JSON.stringify(dataFromUserForm))
  const info = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataFromUserForm),
  }).then(res => res.json())
  console.log(info)
  if (!!info.token) {
    const { expireTime, token } = info
    const { id } = info.user
    setSessionCookie(id, token, expireTime)
    alert('Autentificacion correcta!')
  } else {
    alert('Usuario y/o contraseña incorrecta')
  }
} 

export default logInService
