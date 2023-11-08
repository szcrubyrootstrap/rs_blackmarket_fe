import { useCallback, useState } from 'react'
import { useUserContext } from 'contexts/UserContext'
import loginService from 'services/login'
import logoutService from 'services/logout'
import registrateService from 'services/registrate'
import { useLocation } from 'wouter'
import { urlPath } from 'src/setup'
import recoverPasswordService from 'services/recoverPassword'

export default function useUser () {
  const {token, setToken, loginError, setLoginError, registrationError, setRegistrationError} = useUserContext()
  const [, navigate] = useLocation()
  const [state, setState] = useState({ error: false, errorMessage: '' })
  const headersData = (response) => {
    return {
      accessToken: response.headers.get('access-token'),
      client: response.headers.get('client'),
      expiry: response.headers.get('expiry'),
      tokenType: response.headers.get('token-type'),
      uid: response.headers.get('uid')
    }
  }

  const login = useCallback(async ({ email, password }) => {
    setLoginError({ loading: true, error: false, message: '' })

    try{
      const response = await loginService({ email, password })

      window.localStorage.setItem('token', JSON.stringify(headersData(response)))
      setToken(headersData(response))
      setLoginError({ error: false, message: '' })
    } catch (err) {
      window.localStorage.removeItem('token')
      setLoginError({ error: true, message: err.message })
    }
  }, [setToken, setLoginError])

  const logout = useCallback(async () => {
    try {
      await logoutService(token)
      window.sessionStorage.removeItem('token')
      setToken(null)
    } catch(err) {
      console.log(err.message)
    }
  }, [token, setToken])

  const registrate = useCallback(async ({ email, password, password_confirmation }) => {
    setRegistrationError({ error: false, message: '' })

    try{
      await registrateService({ email, password, password_confirmation })
      setRegistrationError({ error: false, message: '' })
      navigate(urlPath.login)
    } catch (err) {
      setRegistrationError({ error: true, message: err.message })
    }
  }, [navigate, setRegistrationError])

  const recoverPassword = useCallback(({ email }) => {
    recoverPasswordService({ email })
    .then(res => {
      setState({ error: false, errorMessage: '', emailSent: true })
    })
    .catch(err => {
      setState({ error: true, errorMessage: err.message, emailSent: false })
    })
  }, [setState])

  return {
    isLogged: Boolean(token),
    loginError: Boolean(loginError.error),
    loginErrorMessage: loginError.message,
    registrationError: Boolean(registrationError.error),
    registrationErrorMessage: registrationError.message,
    recoveryEmailSent: state.emailSent,
    login,
    logout,
    registrate,
    recoverPassword
  }
}
