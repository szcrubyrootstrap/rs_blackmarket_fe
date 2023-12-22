import { useCallback } from 'react'
import { useUserContext } from 'contexts/UserContext'
import loginService from 'services/login'
import logoutService from 'services/logout'
import registrateService from 'services/registrate'
import resetPasswordService from 'services/resetPassword'
import { useLocation } from 'wouter'
import { urlPath } from 'src/setup'

export default function useUser () {
  const {token, setToken, requestError, setRequestError} = useUserContext()
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
    setRequestError({ loading: true, error: false, message: '' })

    try{
      const response = await loginService({ email, password })

      window.localStorage.setItem('token', JSON.stringify(headersData(response)))
      setToken(headersData(response))
      setRequestError({ error: false, message: '' })
    } catch (err) {
      window.localStorage.removeItem('token')
      setRequestError({ error: true, message: err.message })
    }
  }, [setToken, setRequestError])

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
    setRequestError({ error: false, message: '' })

    try{
      await registrateService({ email, password, password_confirmation })
      setRequestError({ error: false, message: '' })
      navigate(urlPath.login)
    } catch (err) {
      setRequestError({ error: true, message: err.message })
    }
  }, [navigate, setRequestError])

  const resetPassword = useCallback(async ({ email }) => {
    setRequestError({ error: false, message: '' })

    try{
      await resetPasswordService({ email })
      setRequestError({ error: false, message: '' })
      navigate(urlPath.login)
    } catch (err) {
      setRequestError({ error: true, message: err.message })
    }
  }, [navigate, setRequestError])

  return {
    isLogged: Boolean(token),
    requestError: Boolean(requestError.error),
    requestErrorMessage: requestError.message,
    login,
    logout,
    registrate,
    resetPassword
  }
}
