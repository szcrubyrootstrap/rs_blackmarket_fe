import { Route, Switch } from "wouter";

import Home from './components/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { UserContextProvider } from './contexts/UserContext'

const routes = [
    { component: Home, path: '/' },
    { component: Login, path: '/login' },
    { component: Registration, path: '/registration' }
]

function App() {
  return (
    <>
      <UserContextProvider>
        <Switch>
          {
            routes.map(({component, path}, index) => <Route key={index} component={component} path={path} />)
          }
        </Switch>
      </UserContextProvider>
    </>
  )
}

export default App
