// @packages
import Cookies from 'universal-cookie'

const sendNewPatientService = async ({ dni, images }) => {
  const URL = 'http://localhost:3030/patients'
  const cookies = new Cookies()
  const jwt = cookies.get('sessionCookie')
  const { token } = jwt

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'access-token': token,
    },
    body: JSON.stringify({ dni, images }),
  }).then(response => response.json())
 }

export default sendNewPatientService
