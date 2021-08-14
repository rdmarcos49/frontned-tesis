const loginService = async (payload) => {
  const URL = 'http://localhost:3030/api/login'
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .catch(err => console.error(err))

  return response
} 

export default loginService
