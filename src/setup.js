export const endpointsUrl = {
  signIn: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_in`,
  signout: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/sign_out`,
  registrate: `${import.meta.env.VITE_SERVER_URL}/api/v1/users`,
  resetPassword: `${import.meta.env.VITE_SERVER_URL}/api/v1/users/password`
}

export const urlPath = {
  'dashboard': '/',
  'login': '/login',
  'registration': '/registration',
  'resetPassword': '/reset_password',
  'passwordInstructions': '/password_instructions',
  'updatePassword': '/update_password'
}

export function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function isRegistration (componentName) { return (componentName === 'Registration') }
export function isLogin (componentName) { return (componentName === 'Login') }
export function isForgotPassword (componentName) { return (componentName === 'ForgotPassword') }
export function isPasswordInstructions (componentName) { return (componentName === 'PasswordInstructions') }
export function isUpdatePassword (componentName) { return (componentName === 'UpdatePasswordForm') }

export function requestHeaders () {
  const searchParams = new URLSearchParams(window.location.search)
  return {
    'access-token': searchParams.get('access-token'),
    'client': searchParams.get('client'),
    'client_id': searchParams.get('client_id'),
    'config': searchParams.get('config'),
    'expiry': searchParams.get('expiry'),
    'reset_password': searchParams.get('reset_password'),
    'token': searchParams.get('token'),
    'uid': searchParams.get('uid')
  }
}

export * from 'src/setup'
