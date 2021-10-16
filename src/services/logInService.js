const loginService = async (payload) => {
  const URL = 'http://localhost:3030/api/login'
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => res)
    .catch(err => console.error(err))

  const { ok, status } = response
  const data = await response.json()
  
  return {
    ok,
    status,
    data,
  }
} 

export default loginService
