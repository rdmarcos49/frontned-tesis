// @packages
import Cookies from 'universal-cookie'

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
    const cookies = new Cookies()
    let expireDate = new Date()
    expireDate.setMinutes(expireDate.getMinutes() + info.expireTime)
    cookies.set('sessionCookie', info.token, { path: '/', expires: expireDate })
    alert("Autentificacion correcta!")
  } else {
    alert("Usuario y/o contraseña incorrecta")
  }
} 

export default logInService
