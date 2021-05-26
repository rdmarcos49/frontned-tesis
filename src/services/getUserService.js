const getUserService = async (jwt) => {
  const { id, token } = jwt
  const URL = `http://localhost:3030/users/${userId}`
  const info = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'access-token': token,
    },
    body: JSON.stringify({ id }),
  }).then(res => res.json())
  console.log(info)
  return info
} 

export default getUserService
