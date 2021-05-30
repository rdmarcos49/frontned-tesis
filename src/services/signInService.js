const signInService = async (dataFromUserForm) => {
  const URL = 'http://localhost:3030/signin'
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataFromUserForm),
  }).then(response => response.json())
 }

export default signInService
