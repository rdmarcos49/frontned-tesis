const signInService = async (dataForSignIn) => {
  const URL = 'http://localhost:3030/api/users'
  const result = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataForSignIn),
  })
    .then(res => res.ok)
    .catch(err => console.error(err))
  return result
 }

export default signInService
