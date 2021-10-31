const newCheckService = async (payload) => {
  console.log({payload})
  const URL = 'http://localhost:3030/api/patients'
  const jwt = window.sessionStorage.getItem('jwt')

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.ok)
    .catch(err => console.error(err))
  return response
 }

export default newCheckService
