const signInService = async (dataForSignIn) => {
  const URL = 'http://localhost:3030/signin'
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataForSignIn),
  }).then(response => response.json())
 }

export default signInService
