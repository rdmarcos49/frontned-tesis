// @packages
import Cookies from 'universal-cookie'

export default logInService = async (dataFromUserForm) => {
  let formData = new FormData()
  for (const keyAndValue of Object.entries(dataFromUserForm)) {
    const [key, value] = keyAndValue
    formData.append(key, value)
  }
  const response = {
    method: 'POST',
    body: formData,
  }
  console.log(response)
  const info = await fetch('http://localhost:3030/login', response).then(response => response.json())
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
