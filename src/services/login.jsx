const ENDPOINT = "http://localhost:3000/api/v1/users/sign_in"

export default function login ({ email, password }) {
  return (
    fetch(`${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'user': { email, password }})
    }).then(res => {
      if (!res.ok) throw new Error('Response is not correct')
      return { headers: res.headers }
    })
  )
}
