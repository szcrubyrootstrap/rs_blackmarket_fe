const ENDPOINT = `${import.meta.env.VITE_SERVER_URL}/api/v1/users/password`
const REDIRECT_URL = 'example.com'

export default function recoverPassword ({ email }) {
  return (
    fetch(`${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "email": email,
          "redirect_url": REDIRECT_URL
      })
    }).then(response => {
      if (response.ok) {
        return response.json().then(res => { return res })
      } else {
        return response.json().then(res => {
          throw new Error(res.error)
        })
      }
    })
  )
}
