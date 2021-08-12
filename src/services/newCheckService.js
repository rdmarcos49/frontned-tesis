const newCheckService = async (bodyData, jwt) => {
  const URL = 'http://localhost:3030/api/patients'

  console.log(bodyData)
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(bodyData),
  })
    .then(response => response.ok)
    .catch(err => console.error(err))
  return response
 }

export default newCheckService
