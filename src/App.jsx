import { Route, Switch } from "wouter";

import Home from './components/Home/index'
import Login from './pages/Login/index'
import Registration from './components/Registration/index'
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
