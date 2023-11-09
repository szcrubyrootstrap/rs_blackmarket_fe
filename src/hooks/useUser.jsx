import { useContext, useCallback, useState } from 'react'
import Context from 'contexts/UserContext'
import loginService from 'services/login'
import logoutService from 'services/logout'

export default function useUser () {
  const {token, setToken} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false, errorMessage: '' })

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
    setState({ loading: true, error: false, errorMessage: '' })

    try{
      const response = await loginService({ email, password })

      window.localStorage.setItem('token', JSON.stringify(headersData(response)))
      setToken(headersData(response))
      setState({ loading: false, error: false, errorMessage: '' })
    } catch (err) {
      window.localStorage.removeItem('token')
      setState({ loading: false, error: true, errorMessage: err.message })
    }
  }, [setToken])

  const logout = useCallback(async () => {
    try {
      await logoutService(token)
      window.sessionStorage.removeItem('token')
      setToken(null)
    } catch(err) {
      console.log(err.message)
    }
  }, [token, setToken])

  return {
    isLogged: Boolean(token),
    loginError: state.error,
    loginErrorMessage: state.errorMessage,
    login,
    logout
  }
}
