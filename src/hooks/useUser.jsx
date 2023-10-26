import { useContext, useCallback } from 'react'
import Context from '../contexts/UserContext'

export default function useUser () {
  const {token, setToken} = useContext(Context)

  const login = useCallback(() => {
    setToken('foo')
  }, [setToken])

  const logout = useCallback(() => {
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    login,
    logout
  }
}
