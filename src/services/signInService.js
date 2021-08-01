const signInService = async (dataForSignIn) => {
  const URL = 'http://localhost:3030/signin'
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataForSignIn),
  })
    .then(res => res.json())
    .catch(err => console.error(err))
 }

export default signInService
