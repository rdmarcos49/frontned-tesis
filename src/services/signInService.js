const signInService = async (dataFromUserForm) => {
  const URL = 'http://localhost:3030/signin'
  console.log(JSON.stringify(dataFromUserForm))
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataFromUserForm),
  }).then(response => response.json())
  console.log(response)
 }

export default signInService
