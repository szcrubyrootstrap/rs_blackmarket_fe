import { useState, useContext, createContext } from 'react'

const Context = createContext({})

function UserContextProvider ({children}) {
  const [token, setToken] = useState(
    () => JSON.parse(window.localStorage.getItem('token'))
  )
  const [requestError, setRequestError] = useState({ error: false, message: '' })

  return <Context.Provider value={{token, setToken, requestError, setRequestError}}>
    {children}
  </Context.Provider>
}

export const useUserContext = () => useContext(Context)

export default UserContextProvider
