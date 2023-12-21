import { endpointsUrl } from 'src/setup'

export default async function login ({ email, password }) {
  const response = await fetch(endpointsUrl.signIn, {
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
