const ENDPOINT = "http://localhost:3000/api/v1/users"

export default function registrate ({ email, password, password_confirmation }) {
  return (
    fetch(`${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'user': { email, password, password_confirmation }})
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res.status === 'error') {
        const messages = res.errors.full_messages.join(', ')
        throw new Error(messages)
      } else { return res }
    })
  )
}
