const ENDPOINT = `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_in`

export default async function login ({ email, password }) {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'user': { email, password }})
  })

  if (response.ok) {
    return { headers: response.headers }
  } else {
    const data = await response.json()
    throw new Error(data.error)
  }
}
