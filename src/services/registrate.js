import { endpointsUrl } from 'src/setup'

export default async function registrate ({ email, password, password_confirmation }) {
  const response = await fetch(endpointsUrl.registrate, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'user': { email, password, password_confirmation }})
  })

  const responseData = await response.json()

  if (responseData.status === 'error') {
    const messages = responseData.errors.full_messages.join(', ')
    throw new Error(messages)
  } else { return responseData }
}
