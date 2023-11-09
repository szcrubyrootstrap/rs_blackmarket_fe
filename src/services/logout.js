const ENDPOINT = `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_out`

export default async function logout (headers) {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'access-token': headers.accessToken,
      'client': headers.client,
      'uid': headers.uid
    }
  })

  const responseData = await response.json()

  if (response.ok) {
    return responseData
  } else {
    throw new Error(responseData.error)
  }
}
