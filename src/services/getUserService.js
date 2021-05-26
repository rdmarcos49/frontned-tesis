const getUserService = async (jwt) => {
  const { id, token } = jwt
  const URL = `http://localhost:3030/users/${id}`
  const info = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'access-token': token,
    },
    body: JSON.stringify({ id }),
  }).then(res => res.json())
  console.log("#############")
  console.log(`info desde getUserService:`)
  console.log({info})
  console.log("#############")
  return info
} 

export default getUserService
