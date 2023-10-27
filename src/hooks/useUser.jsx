import { useContext, useCallback, useState } from 'react'
import Context from '../contexts/UserContext'
import loginService from './../services/login'

export default function useUser () {
  const {token, setToken} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ email, password }) => {
    setState({ loading: true, error: false })
    loginService({ email, password })
    .then(res => {
      const client = res.headers.get('client')

      window.sessionStorage.setItem('token', client)
      setToken(client)
      setState({ loading: false, error: false })
    })
    .catch(err => {
      window.sessionStorage.removeItem('token')
      setState({ loading: false, error: true })
      console.log(err)
    })
  }, [setToken])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    loginError: state.error,
    isLoading: state.loading,
    login,
    logout
  }
}
