const ENDPOINT = `${import.meta.env.VITE_SERVER_URL}/api/v1/users`

export default async function registrate ({ email, password, password_confirmation }) {
  const response = await fetch(`${ENDPOINT}`, {
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
