import { useState, useContext, createContext } from 'react'

const Context = createContext({})

function UserContextProvider ({children}) {
  const [token, setToken] = useState(
    () => JSON.parse(window.localStorage.getItem('token'))
  )
  const [loginError, setLoginError] = useState({ error: false, message: '' })
  const [registrationError, setRegistrationError] = useState({ error: false, message: '' })

  return <Context.Provider value={{token, setToken, loginError, setLoginError, registrationError, setRegistrationError}}>
    {children}
  </Context.Provider>
}

export const useUserContext = () => useContext(Context)

export default UserContextProvider
