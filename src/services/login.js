const ENDPOINT = "http://localhost:3000/api/v1/users/sign_in"

export default function login ({ email, password }) {
  return (
    fetch(`${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'user': { email, password }})
    }).then(response => {
      if (response.ok) {
        return { headers: response.headers }
      } else {
        return response.json().then(res => {
          throw new Error(res.error)
        })
      }
    })
  )
}
