const sendNewPatientService = async ({ dni, images, jwt }) => {
  const URL = 'http://localhost:3030/api/patients'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({ dni, images }),
  })
    .then(response => response.ok)
    .catch(err => console.error(err))
  return response
 }

export default sendNewPatientService
