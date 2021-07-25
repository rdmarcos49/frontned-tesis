const getUserService = async ({ id, jwt }) => {
  const URL = `http://localhost:3030/user/${id}`

  const info = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'access-token': jwt,
    },
    body: JSON.stringify({ id }),
  })
    .then(res => res.json())
    .catch(err => console.error(err))

  return info
} 

export default getUserService
