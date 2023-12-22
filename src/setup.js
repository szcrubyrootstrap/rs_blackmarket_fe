export const endpointsUrl = {
  signIn: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_in`,
  signout: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_out`,
  registrate: `${import.meta.env.VITE_SERVER_URL}/api/v1/users`,
  resetPassword: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/password`
}

export const urlPath = {
  'home': '/',
  'login': '/login',
  'registration': '/registration',
  'resetPassword': '/reset_password'
}

export function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function isRegistration (componentName) { return (componentName === 'Registration') }
export function isLogin (componentName) { return (componentName === 'Login') }
export function isForgotPassword (componentName) { return (componentName === 'ForgotPassword') }

export * from 'src/setup'
