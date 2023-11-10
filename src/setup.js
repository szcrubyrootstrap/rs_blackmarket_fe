export const endpointsUrl = {
  signIn: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_in`,
  signout: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_out`,
  registrate: `${import.meta.env.VITE_SERVER_URL}/api/v1/users`
}

export const urlPath = {
  'home': '/',
  'login': '/login',
  'registration': '/registration'
}

export * from 'src/setup'
