import { Route, Switch } from 'wouter'

import Home from 'components/Home'
import Login from 'pages/Login'
import Registration from 'pages/Registration'
import UserContextProvider from 'contexts/UserContext'
import { urlPath } from 'src/setup'
import RecoverPassword from 'pages/RecoverPassword'

const routes = [
  { component: Home, path: urlPath.home },
  { component: Login, path: urlPath.login },
  { component: Registration, path: urlPath.registration },
  { component: RecoverPassword, path: urlPath.recoverPassword }
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
