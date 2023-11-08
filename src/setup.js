export const endpointsUrl = {
  signIn: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_in`,
  signout: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_out`,
  registrate: `${import.meta.env.VITE_SERVER_URL}/api/v1/users`
}

export const urlPath = {
  'home': '/',
  'login': '/login',
  'registration': '/registration',
  'recoverPassword': '/recover_password'
}

export function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function isRegistration (componentName) { return (componentName === 'Registration') }
export function isLogin (componentName) { return (componentName === 'Login') }

export * from 'src/setup'
