const sendNewPatientService = async ({ dni, images, jwt }) => {
  const URL = 'http://localhost:3030/patient'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': jwt,
    },
    body: JSON.stringify({ dni, images }),
  })
    .then(response => response.json())
    .catch(err => console.error(err))
  return response
 }

export default sendNewPatientService
