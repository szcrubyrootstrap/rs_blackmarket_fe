import { useCallback } from 'react'
import { useUserContext } from 'contexts/UserContext'
import loginService from 'services/login'
import logoutService from 'services/logout'
import registrateService from 'services/registrate'
import { useLocation } from 'wouter'
import { urlPath } from 'src/setup'

export default function useUser () {
  const {token, setToken, loginError, setLoginError, registrationError, setRegistrationError} = useUserContext()
  const [, navigate] = useLocation()
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

  return {
    isLogged: Boolean(token),
    loginError: Boolean(loginError.error),
    loginErrorMessage: loginError.message,
    registrationError: Boolean(registrationError.error),
    registrationErrorMessage: registrationError.message,
    login,
    logout,
    registrate
  }
}
