// @packages
import Cookies from 'universal-cookie'

function setSessionCookie(userId, backendExpireTime) {
  const cookies = new Cookies()
  let expireDate = new Date()
  expireDate.setMinutes(expireDate.getMinutes() + backendExpireTime)
  const sessionData = { token: info.token, id: userId }
  cookies.set('sessionCookie', JSON.stringify(sessionData), { path: '/', expires: expireDate })
}

export default setSessionCookie
