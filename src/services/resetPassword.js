import { endpointsUrl } from 'src/setup'

export default async function resetPassword ({ email }) {
  const redirectUrl = 'example.com'
  const response = await fetch(endpointsUrl.resetPassword, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, 'redirect_url': redirectUrl })
  })

  if (response.ok) {
    return { headers: response.headers }
  } else {
    const data = await response.json()
    throw new Error(data.error)
  }
}
