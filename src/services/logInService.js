const loginService = async ({ username, password }) => {
  const URL = 'http://localhost:3030/login'
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(res => res.json())
    .catch(err => console.error(err))

  return response
} 

export default loginService
