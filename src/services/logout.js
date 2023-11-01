const ENDPOINT = "http://localhost:3000/api/v1/users/sign_out/"

export default function logout (headers) {
  return (
    fetch(`${ENDPOINT}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'access-token': headers.accessToken,
        'client': headers.client,
        'uid': headers.uid
      }
    }).then(res => {
      if (!res.ok) throw new Error('Response is not correct')
      return res.json()
    }).then(res => {
      return res
    }).catch(err => {
      console.log(err.message)
    })
  )
}
