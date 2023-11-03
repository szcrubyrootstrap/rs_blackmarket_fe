import { Route, Switch } from "wouter";

import Home from './components/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { UserContextProvider } from './contexts/UserContext'

function App() {
  return (
    <>
      <UserContextProvider>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Registration} path="/registration" />
        </Switch>
      </UserContextProvider>
    </>
  )
}

export default App
