const sendNewPatientService = async ({ dni, images, jwt }) => {
  const URL = 'http://localhost:3030/patient'

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'access-token': jwt,
    },
    body: JSON.stringify({ dni, images }),
  }).then(response => response.json())
 }

export default sendNewPatientService
