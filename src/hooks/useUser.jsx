import { useContext, useCallback, useState } from 'react'
import Context from '../contexts/UserContext'
import loginService from './../services/login'
import logoutService from './../services/logout'

export default function useUser () {
  const {token, setToken} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ email, password }) => {
    setState({ loading: true, error: false })
    loginService({ email, password })
    .then(res => {
      const requestHeaders = {
        accessToken: res.headers.get('access-token'),
        client: res.headers.get('client'),
        expiry: res.headers.get('expiry'),
        tokenType: res.headers.get('token-type'),
        uid: res.headers.get('uid')
      }

      window.localStorage.setItem('token', JSON.stringify(requestHeaders))
      setToken(requestHeaders)
      setState({ loading: false, error: false })
    })
    .catch(err => {
      window.localStorage.removeItem('token')
      setState({ loading: false, error: true })
    })
  }, [setToken])

  const logout = useCallback(() => {
    logoutService(token)
    .then(res => {
      window.sessionStorage.removeItem('token')
      setToken(null)
    })
    .catch(err => {
      console.log(err)
    })
  }, [token, setToken])

  return {
    isLogged: Boolean(token),
    loginError: state.error,
    isLoading: state.loading,
    login,
    logout
  }
}
