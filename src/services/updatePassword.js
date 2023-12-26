import { endpointsUrl } from 'src/setup'

export default async function updatePasswordService ({ password, password_confirmation, headers }) {
  const response = await fetch(endpointsUrl.resetPassword, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, password_confirmation })
  })

  if (response.ok) {
    return { headers: response.headers }
  } else {
    const data = await response.json()
    const message = data.error ? data.error : data.errors.full_messages
    throw new Error(message)
  }
}
