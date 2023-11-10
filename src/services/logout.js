import { endpointsUrl } from 'src/setup'

export default async function logout (headers) {
  const response = await fetch(endpointsUrl.signout, {
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
